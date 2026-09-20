import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { ServiceAccordion } from "@/components/ServiceAccordion";
import { StatusChip } from "@/components/StatusChip";
import { ADVANTAGES, FAQS } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Web Development, Mobile Apps & AI Solutions",
  description:
    "Web development, mobile apps, AI solutions, digital marketing, and custom software — from stunning websites to intelligent AI systems. Transform your business with cutting-edge technology.",
  keywords: ["web development Ahmedabad", "mobile app development", "AI solutions India", "digital marketing", "custom software development", "Tathagata Technology"],
  alternates: canonical("/services"),
};

export default function ServicesPage() {
  return (
    <div className="container-shell pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="active" label="What we do" />
      <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
        Our services.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        We build powerful digital solutions — from stunning websites to
        intelligent AI systems. Open a service to see what is inside.
      </p>
      <div className="mt-12">
        <ServiceAccordion />
      </div>

      <div className="mt-20 md:mt-24">
        <Reveal>
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Why choose us
          </p>
          <h2 className="headline-fluid mt-3 max-w-[752px] text-[#231F20]">
            The Tathagata advantage.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="card-ring h-full p-7">
                <p className="tnum font-mono text-sm font-bold text-[#0e6e9e]">0{i + 1}</p>
                <h3 className="mt-3 font-medium tracking-tight text-[#231F20]">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#231F20]/80">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-4xl md:mt-24">
        <Reveal>
          <h2 className="headline-fluid text-[#231F20]">
            Frequently asked questions.
          </h2>
        </Reveal>
        <div className="mt-8 border-t hairline-ink">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b hairline-ink py-5">
              <summary className="cursor-pointer list-none text-lg font-medium tracking-tight text-[#231F20] hover:text-[#0e6e9e]">
                <span aria-hidden="true" className="mr-3 text-[#35b7ea] group-open:hidden">+</span>
                <span aria-hidden="true" className="mr-3 hidden text-[#35b7ea] group-open:inline">−</span>
                {f.q}
              </summary>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-[#231F20]/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <p className="tnum mt-8 font-mono text-[13px] text-[#5F6B76]">
        Need a number first? <Link href="/contact" className="text-[#0e6e9e] hover:text-[#231F20]">Get a quote</Link>
      </p>
      <div className="mt-12">
        <CTABanner title="Ready to transform your business?" body="Let's discuss how our services can help you achieve your goals." />
      </div>
    </div>
  );
}
