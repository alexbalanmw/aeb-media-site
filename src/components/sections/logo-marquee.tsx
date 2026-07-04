import { Marquee } from "@/components/motion/marquee";

const clients = [
  "Swing Loose Indoor Golf",
  "Molly Maid of Oak Park",
  "Val's Services Cleaning",
  "Brazilian Lymph Spa",
  "Shadow Work",
  "Elite Adjusting Group",
  "Connect Mortgage Corp",
  "Full Quality Construction",
  "Battisti Capital Group",
  "Krav Maga Force Schaumburg",
  "Waxing The City",
  "Michael Kogan Self Defense",
  "American Family Insurance Buffalo Grove",
];

export function LogoMarquee() {
  return (
    <section aria-label="Clients" className="border-y border-border bg-card py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by local businesses across Chicagoland
      </p>
      <Marquee>
        {clients.map((client) => (
          <span
            key={client}
            className="whitespace-nowrap font-display text-xl font-semibold text-muted-foreground"
          >
            {client}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
