"use client";

import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitLead } from "@/app/actions/lead";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { trackLead } from "@/lib/analytics";
import { leadSchema, serviceOptions, type LeadActionState } from "@/lib/lead";

const initialState: LeadActionState = { status: "idle" };

type LeadFormProps = {
  /** Preselects the service dropdown, e.g. "free-shoot" on the landing page. */
  defaultService?: string;
};

export function LeadForm({ defaultService }: LeadFormProps) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [clientErrors, setClientErrors] = useState<LeadActionState["errors"]>({});
  const [service, setService] = useState(defaultService ?? "");
  // Set client-side after hydration so the static prerender doesn't bake in a
  // stale timestamp; state (not a ref) so the hidden input re-renders with it.
  const [startedAt, setStartedAt] = useState(0);

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  const trackedRef = useRef(false);
  useEffect(() => {
    if (state.status === "success" && !trackedRef.current) {
      trackedRef.current = true;
      trackLead(service || "unspecified");
    }
  }, [state.status, service]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-card p-10 text-center"
      >
        <CheckCircle2Icon
          aria-hidden="true"
          className="mx-auto size-12 text-brand-600 dark:text-brand-400"
        />
        <h3 className="mt-4 font-display text-2xl font-semibold">
          Got it — talk soon.
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Your message is on its way. We&apos;ll get back to you within one business
          day — usually much faster.
        </p>
      </div>
    );
  }

  const errors = { ...state.errors, ...clientErrors };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const parsed = leadSchema.safeParse({
      name: formData.get("name"),
      business: formData.get("business"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    });
    if (!parsed.success) {
      event.preventDefault();
      const nextErrors: LeadActionState["errors"] = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof NonNullable<LeadActionState["errors"]>;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setClientErrors(nextErrors);
      return;
    }
    setClientErrors({});
  };

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" value={startedAt || ""} />

      <FieldGroup className="gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors?.name || undefined}>
            <FieldLabel htmlFor="lead-name">Name</FieldLabel>
            <Input
              id="lead-name"
              name="name"
              autoComplete="name"
              aria-invalid={!!errors?.name}
              placeholder="Jane Smith"
            />
            {errors?.name && <FieldError>{errors.name}</FieldError>}
          </Field>
          <Field data-invalid={!!errors?.business || undefined}>
            <FieldLabel htmlFor="lead-business">Business name</FieldLabel>
            <Input
              id="lead-business"
              name="business"
              autoComplete="organization"
              aria-invalid={!!errors?.business}
              placeholder="Smith Cleaning Co."
            />
            {errors?.business && <FieldError>{errors.business}</FieldError>}
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors?.email || undefined}>
            <FieldLabel htmlFor="lead-email">Email</FieldLabel>
            <Input
              id="lead-email"
              type="email"
              name="email"
              autoComplete="email"
              aria-invalid={!!errors?.email}
              placeholder="jane@smithcleaning.com"
            />
            {errors?.email && <FieldError>{errors.email}</FieldError>}
          </Field>
          <Field data-invalid={!!errors?.phone || undefined}>
            <FieldLabel htmlFor="lead-phone">Phone</FieldLabel>
            <Input
              id="lead-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              aria-invalid={!!errors?.phone}
              placeholder="(312) 555-0199"
            />
            {errors?.phone && <FieldError>{errors.phone}</FieldError>}
          </Field>
        </div>

        <Field data-invalid={!!errors?.service || undefined}>
          <FieldLabel htmlFor="lead-service">What are you interested in?</FieldLabel>
          <Select name="service" value={service} onValueChange={setService}>
            <SelectTrigger id="lead-service" aria-invalid={!!errors?.service}>
              <SelectValue placeholder="Pick a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors?.service && <FieldError>{errors.service}</FieldError>}
        </Field>

        <Field data-invalid={!!errors?.message || undefined}>
          <FieldLabel htmlFor="lead-message">What do you need?</FieldLabel>
          <Textarea
            id="lead-message"
            name="message"
            rows={4}
            aria-invalid={!!errors?.message}
            placeholder="Tell us about your business and what you're trying to grow."
          />
          {errors?.message && <FieldError>{errors.message}</FieldError>}
        </Field>

        {state.status === "error" && state.message && (
          <p role="alert" className="text-sm font-medium text-destructive">
            {state.message}
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-13 w-full bg-ember-500 text-base font-semibold text-ember-950 hover:bg-ember-400 sm:w-auto sm:px-10"
        >
          {pending ? (
            <>
              <Loader2Icon aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}
