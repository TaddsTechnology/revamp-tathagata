import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { MetricsGrid } from "@/components/MetricsGrid";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { COMPANY, MISSION, VALUES } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Digital Agency & AI Solutions",
  description:
    "Tathagata started with a simple idea: great technology should be accessible to every business. 11+ projects for 6+ happy clients across India and internationally.",
  keywords: ["about Tathagata Technology", "digital agency Ahmedabad", "IT company India", "our mission"],
  alternates: canonical("/about"),
};

export default function AboutPage() {
  return (
    <div className="container-shell pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="pass" label="About us" />
      <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
        Transforming ideas into reality.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        We are a team of passionate technologists dedicated to helping
        businesses thrive in the digital age through innovative solutions.
      </p>

      <Reveal className="mt-12">
        <MetricsGrid />
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#231F20]">
            Helping small businesses go digital.
          </h2>
          <div className="mt-4 grid max-w-[58ch] gap-4 leading-relaxed text-[#231F20]/80">
            <p>
              Tathagata started with a simple idea: great technology should be
              accessible to every business, not just large corporations with big
              budgets. What began as a small team of two developers has grown
              into a full-service digital agency.
            </p>
            <p>
              We specialize in understanding what small businesses actually need.
              Not complicated systems that require expensive training — but
              practical tools that solve real problems. Whether it is a website
              that brings in customers, an app that streamlines operations, or
              AI that saves hours of manual work.
            </p>
            <p>
              Today, we have completed 11+ projects for 6+ happy clients across
              India and internationally. Every project teaches us something new,
              and we bring that learning to every client we work with.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-ring bg-[#E8F6FE] p-7 md:p-8">
            <p className="tnum font-mono text-xs uppercase tracking-wider text-[#0e6e9e]">
              Our mission
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-[#231F20]">
              {MISSION.title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#231F20]/80">{MISSION.body}</p>
            <ul className="mt-5 grid gap-2">
              {MISSION.points.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm font-medium text-[#231F20]">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#35b7ea]" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <Reveal>
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            What we believe
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-[#231F20]">
            Our core values.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="card-ring h-full p-7">
                <p className="tnum font-mono text-sm font-bold text-[#0e6e9e]">0{i + 1}</p>
                <h3 className="mt-3 font-medium tracking-tight text-[#231F20]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#231F20]/80">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="card-ring mt-8 p-7">
          <h2 className="font-medium tracking-tight text-[#231F20]">Visit the studio</h2>
          <p className="mt-2 text-[15px] text-[#231F20]/85">{COMPANY.address}</p>
          <p className="tnum mt-1 font-mono text-[13px] text-[#5F6B76]">{COMPANY.hours}</p>
          <p className="tnum mt-3 font-mono text-[13px]">
            <a href={`mailto:${COMPANY.emailGeneral}`} className="text-[#0e6e9e] hover:text-[#231F20]">{COMPANY.emailGeneral}</a>
            {", "}
            <a href={COMPANY.phoneHref} className="text-[#0e6e9e] hover:text-[#231F20]">{COMPANY.phone}</a>
          </p>
        </div>
      </Reveal>

      <div className="mt-14">
        <CTABanner title="Let's work together." body="Ready to transform your business? We'd love to hear from you." />
      </div>
    </div>
  );
}
