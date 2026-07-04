import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KeystaticApp from "../keystatic";

export const metadata: Metadata = {
  title: "Admin | AEB Media",
  robots: { index: false, follow: false },
};

// In production the admin only exists in GitHub mode (login + repo write
// access required). Without it, the route 404s — local no-auth mode is for
// `npm run dev` on your own machine only.
const adminEnabled =
  process.env.NODE_ENV === "development" ||
  !!process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPO;

export default function KeystaticPage() {
  if (!adminEnabled) notFound();
  return <KeystaticApp />;
}
