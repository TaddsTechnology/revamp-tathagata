import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { POSTS } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Web, Cloud & AI Notes for Business Owners",
  description:
    "Practical guides from Tathagata Technology: Next.js vs WordPress, AWS cost mistakes, AI inbox triage — written for owners, not developers.",
  keywords: ["Next.js vs WordPress", "AWS cost optimization", "AI for business", "IT blog India"],
  alternates: canonical("/blog"),
};

export default function BlogPage() {
  return (
    <div className="container-shell max-w-4xl pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="info" label={`${POSTS.length} notes`} />
      <h1 className="headline-fluid mt-6 text-[#231F20]">
        Notes from delivery.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        What we learn shipping web, mobile, and AI for real clients. Plain language, no buzzwords.
      </p>
      <div className="mt-12 border-t hairline-ink">
        {POSTS.map((p) => (
          <Reveal key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group grid gap-2 border-b hairline-ink py-7 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
              <span>
                <span className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">{p.tag} / {p.readTime}</span>
                <span className="mt-2 block text-xl font-medium tracking-tight text-[#231F20] group-hover:text-[#0e6e9e] md:text-2xl">{p.title}</span>
                <span className="mt-2 block max-w-[62ch] text-[15px] leading-relaxed text-[#5F6B76]">{p.excerpt}</span>
              </span>
              <span className="tnum shrink-0 font-mono text-xs text-[#5F6B76]">{p.date}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
