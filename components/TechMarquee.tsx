import Image from "next/image";
import { TECHNOLOGIES_ROW_A, TECHNOLOGIES_ROW_B } from "@/lib/data";

function Row({
  items,
  label,
  duration = "40s",
  reverse = false,
}: {
  items: { name: string; slug: string }[];
  label: string;
  duration?: string;
  reverse?: boolean;
}) {
  return (
    <div className="marquee marquee-mask overflow-hidden" aria-label={label}>
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {[0, 1].map((half) => (
          <div key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
            {items.map((t, idx) => (
              <span key={`${t.slug}-${idx}`} className="flex shrink-0 items-center">
                <span className="flex items-center gap-4 px-10 py-4">
                  <Image
                    src={`https://cdn.simpleicons.org/${t.slug}`}
                    alt={`${t.name} logo`}
                    width={32}
                    height={32}
                    loading="lazy"
                    unoptimized
                    className="h-8 w-8"
                  />
                  <span className="tnum whitespace-nowrap font-mono text-base font-medium text-[#231F20]">
                    {t.name}
                  </span>
                </span>
                <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-[#35B7EA]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section aria-labelledby="stack-h" className="border-b hairline-ink bg-white">
      <div className="container-shell flex flex-wrap items-baseline justify-between gap-3 pt-12 md:pt-14">
        <h2 id="stack-h" className="text-2xl font-medium tracking-tight text-[#231F20] md:text-3xl">
          The stack we ship on.
        </h2>
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            22 technologies · production daily
          </p>
      </div>
      <div className="grid gap-1 py-6">
        <Row items={TECHNOLOGIES_ROW_A} label="Frontend and backend technologies" duration="60s" />
        <Row items={TECHNOLOGIES_ROW_B} label="Cloud and design technologies" duration="80s" reverse />
      </div>
    </section>
  );
}
