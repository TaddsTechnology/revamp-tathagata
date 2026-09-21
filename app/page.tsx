import Link from "next/link";
import { HeroHome } from "@/components/HeroHome";
import { TechMarquee } from "@/components/TechMarquee";
import { MetricsGrid } from "@/components/MetricsGrid";
import { EventStream } from "@/components/EventStream";
import { BentoGrid } from "@/components/BentoGrid";
import { Journey } from "@/components/Journey";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { PARTNER, TESTIMONIALS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroHome />
      <TechMarquee />

      <section className="container-shell py-20 md:py-28" aria-label="Proof">
        <Reveal>
          <MetricsGrid />
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b hairline-ink pb-8">
            <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">In partnership with</p>
            <span className="text-[15px] font-medium text-[#231F20]/80">
              {PARTNER.name}
            </span>
            <span className="tnum font-mono text-xs text-[#5F6B76]">{PARTNER.role}</span>
          </div>
        </Reveal>
      </section>

      <section className="container-shell pb-20 md:pb-28" aria-labelledby="stream-section-h">
        <Reveal>
          <h2 id="stream-section-h" className="headline-fluid max-w-[752px] text-[#231F20]">
            How every project runs.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
            Fixed quote up front, delivery in 4–8 weeks, 30 days of free
            support after launch. No spam, no hidden fees, no hard sell.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <EventStream />
        </Reveal>
      </section>

      <section className="container-shell pb-20 md:pb-28" aria-labelledby="bento-h">
        <Reveal>
          <h2 id="bento-h" className="headline-fluid max-w-[752px] text-[#231F20]">
            The Tathagata advantage.
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <BentoGrid />
        </Reveal>
        <Reveal className="mt-10">
          <Link href="/projects" className="btn-ghost-square px-6 py-3 text-[16px]">
            See our work
          </Link>
        </Reveal>
      </section>

      <Journey />

      <section className="container-shell pb-20 md:pb-28" aria-label="Client feedback">
        <div className="grid items-stretch gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="card-ring flex h-full flex-col bg-[#E8F6FE] p-8">
                <div className="flex items-center justify-between gap-3">
                  <span aria-label="Rated 5 out of 5" className="text-lg tracking-[0.2em] text-[#1493cb]">
                    ★★★★★
                  </span>
                  <span aria-hidden="true" className="font-mono text-5xl leading-none text-[#35B7EA]">
                    &ldquo;
                  </span>
                </div>
                <blockquote className="mt-4 text-balance pb-8 text-lg font-medium leading-snug tracking-tight text-[#231F20]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 border-t hairline-ink pt-5">
                  <span
                    aria-hidden="true"
                    className="tnum flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#231F20] font-mono text-sm font-bold text-white"
                  >
                    {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-[#231F20]">{t.name}</span>
                    <span className="block truncate font-mono text-xs text-[#5F6B76]">{t.role}</span>
                  </span>
                  <span className="tnum ml-auto shrink-0 font-mono text-xs text-[#0e6e9e]">{t.project}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
