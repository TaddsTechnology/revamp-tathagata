import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { COMPANY, PRODUCTS } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Products — CartPOS Billing App & HRMS Suite",
  description:
    "Products by Tathagata Technology: CartPOS GST billing & POS app for retail, and HRMS Suite HR web app with employee mobile app. Demos in 20 minutes.",
  keywords: ["CartPOS", "HRMS Suite", "POS billing app", "HRMS software India", "Tathagata products"],
  alternates: canonical("/product"),
};

export default function ProductPage() {
  return (
    <div className="container-shell pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="active" label="In-house software" />
      <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
        Software born from client work.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        Repeated pain, turned into maintained product. Starting with our own delivery desk.
      </p>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {PRODUCTS.map((p) => (
          <Reveal key={p.name}>
            <article className="card-ring flex h-full flex-col p-8">
              <StatusChip status={p.tag === "Flagship" ? "info" : "warn"} label={p.tag} />
              <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#231F20]">{p.name}</h2>
              <p className="mt-1 font-medium text-[#231F20]">{p.headline}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#231F20]/80">{p.body}</p>
              <ul className="mt-5 grid gap-2">
                {p.bullets.map((b) => (
                  <li key={b} className="font-mono text-[13px] text-[#5F6B76]">
                    <span aria-hidden="true" className="mr-2 text-[#35b7ea]">+</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={`/product/${p.slug}`} className="btn-square mt-6 w-fit px-6 py-3 text-[16px]">
                Explore {p.name}
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="tnum mt-8 max-w-[62ch] font-mono text-[13px] leading-relaxed text-[#5F6B76]">
        Need something private? Internal tools, CRMs, automations —{" "}
        <a href={`mailto:${COMPANY.emailSales}`} className="text-[#0e6e9e] hover:text-[#231F20]">{COMPANY.emailSales}</a>
      </p>
      <div className="mt-12">
        <CTABanner title="See it on your own data." body="A 20 minute demo on your shop, your staff, your numbers." />
      </div>
    </div>
  );
}
