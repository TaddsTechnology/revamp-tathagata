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
  const t = TESTIMONIALS[0];
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
        <Reveal>
          <figure className="card-ring bg-[#E8F6FE] p-8 md:p-12">
            <blockquote className="max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight text-[#231F20] md:text-[2rem]">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="tnum font-mono text-sm text-[#231F20]">{t.name}</span>
              <span className="tnum font-mono text-sm text-[#5F6B76]">{t.role}</span>
              <span className="tnum ml-auto hidden font-mono text-sm text-[#0e6e9e] sm:block">
                Partnered delivery
              </span>
            </figcaption>
          </figure>
        </Reveal>
        <div className="mt-12">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
