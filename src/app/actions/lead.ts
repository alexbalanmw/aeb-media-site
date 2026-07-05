"use server";

import { headers } from "next/headers";
import { leadSchema, type LeadActionState } from "@/lib/lead";
import { isRateLimited } from "@/lib/rate-limit";

const MIN_FILL_MS = 3_000;
const MAX_FILL_MS = 24 * 60 * 60 * 1000;

export async function submitLead(
  _prev: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  // Honeypot: real users never fill the hidden "website" field. Pretend success
  // so bots get no signal.
  if (typeof formData.get("website") === "string" && formData.get("website") !== "") {
    return { status: "success" };
  }

  // Time-to-submit: instant submissions are bots.
  const startedAt = Number(formData.get("startedAt"));
  const elapsed = Date.now() - startedAt;
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS || elapsed > MAX_FILL_MS) {
    return { status: "success" };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many submissions. Please try again in a few minutes.",
    };
  }

  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    business: formData.get("business"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const errors: LeadActionState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof typeof errors;
      if (field && !errors[field]) errors[field] = issue.message;
    }
    return { status: "error", errors, message: "Please fix the fields marked below." };
  }

  // Any JSON-accepting endpoint works: Formspree today, n8n later.
  // Falls back to the old var name in case it's still set somewhere.
  const webhookUrl =
    process.env.LEAD_WEBHOOK_URL ?? process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "[lead] LEAD_WEBHOOK_URL is not set — lead accepted but NOT forwarded:",
      { ...parsed.data, email: "<redacted>", phone: "<redacted>" },
    );
    return { status: "success" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        source: "aeb.media website",
        submittedAt: new Date().toISOString(),
        // Formspree conveniences (harmless extras for any other endpoint):
        // reply directly to the lead, readable inbox subject line.
        _replyto: parsed.data.email,
        _subject: `New lead from aeb.media — ${parsed.data.name} (${parsed.data.service})`,
      }),
    });
    if (!response.ok) {
      console.error(`[lead] webhook responded ${response.status}`);
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please try again or email us directly.",
      };
    }
  } catch (error) {
    console.error("[lead] webhook request failed", error);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again or email us directly.",
    };
  }

  return { status: "success" };
}
