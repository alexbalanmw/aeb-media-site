import { Marquee } from "@/components/motion/marquee";

const clients = ["Swing Loose Indoor Golf", "Molly Maid of Oak Park", "Val's Services"];

export function LogoMarquee() {
  return (
    <section aria-label="Clients" className="border-y border-border bg-card py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
        Trusted by local businesses across Chicagoland
      </p>
      <Marquee>
        {[...clients, ...clients].map((client, index) => (
          <span
            key={`${client}-${index}`}
            className="whitespace-nowrap font-display text-xl font-semibold text-muted-foreground/70"
          >
            {client}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
