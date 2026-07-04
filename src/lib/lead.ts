import { z } from "zod";

export const serviceOptions = [
  { value: "social", label: "Social Media Content" },
  { value: "google-ads", label: "Google Ads" },
  { value: "meta-ads", label: "Meta Ads" },
  { value: "web", label: "Web & Lead Gen" },
  { value: "automation", label: "AI Automation" },
  { value: "free-audit", label: "Free Social Media Audit" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const serviceValues = serviceOptions.map((option) => option.value) as [
  string,
  ...string[],
];

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  business: z.string().trim().min(2, "Please enter your business name."),
  email: z.email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .regex(/^[\d\s()+.-]+$/, "Please enter a valid phone number."),
  service: z.enum(serviceValues, { error: "Please pick a service." }),
  message: z.string().trim().min(10, "Tell us a little about what you need."),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadActionState = {
  status: "idle" | "success" | "error";
  /** Field-level validation errors keyed by field name. */
  errors?: Partial<Record<keyof LeadInput, string>>;
  /** Non-field error shown above the submit button. */
  message?: string;
};
