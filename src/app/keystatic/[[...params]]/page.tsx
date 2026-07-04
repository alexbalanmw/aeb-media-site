import type { Metadata } from "next";
import KeystaticApp from "../keystatic";

export const metadata: Metadata = {
  title: "Admin | AEB Media",
  robots: { index: false, follow: false },
};

export default function KeystaticPage() {
  return <KeystaticApp />;
}
