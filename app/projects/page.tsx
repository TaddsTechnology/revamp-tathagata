import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { IMAGES, PROJECTS } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio | Web Development, Mobile Apps & AI Projects",
  description:
    "Selected work from Tathagata Technology — partnered delivery, e-commerce, mobile apps, AI integrations, and growth campaigns across India and internationally.",
  keywords: ["web development portfolio", "mobile app projects", "AI projects India", "Tathagata work"],
  alternates: canonical("/projects"),
};

const COVERS = [IMAGES.desk, IMAGES.mobile, IMAGES.cloud, IMAGES.ux, IMAGES.team, IMAGES.office];

export default function ProjectsPage() {
  return (
    <div className="container-shell pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="pass" label="Selected work" />
      <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
        Work that speaks for itself.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        11+ projects for 6+ happy clients across India and internationally —
        every one teaching us something we bring to the next.
      </p>
      <div className="mt-12 grid gap-12">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="grid items-center gap-7 lg:grid-cols-2">
              <div className={`relative min-h-[260px] overflow-hidden border hairline-ink ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={COVERS[i % COVERS.length]} alt={p.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <StatusChip status="info" label={p.category} />
                <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#231F20]">{p.title}</h2>
                <p className="mt-2 max-w-[52ch] leading-relaxed text-[#231F20]/80">{p.description}</p>
                <p className="tnum mt-4 font-mono text-lg font-bold text-[#0e6e9e]">{p.result}</p>
                <p className="tnum mt-2 font-mono text-xs text-[#5F6B76]">{p.stack.join(" / ")}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-16">
        <CTABanner title="Your project could read like this." body="Share the goal. Get scope and a fixed quote back." />
      </div>
    </div>
  );
}
