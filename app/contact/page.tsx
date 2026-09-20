import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { COMPANY } from "@/lib/data";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us — Get a Fixed Quote in 24 Hours",
  description:
    "Contact Tathagata Technology in Ahmedabad: sales@tathagatatechnology.in, +91 75750 96359, Science City. Replies within 24 hours on business days.",
  keywords: ["contact IT company Ahmedabad", "get software quote", "Tathagata contact"],
  alternates: canonical("/contact"),
};

const ROWS = [
  { h: "General", v: COMPANY.emailGeneral, href: `mailto:${COMPANY.emailGeneral}` },
  { h: "Sales", v: COMPANY.emailSales, href: `mailto:${COMPANY.emailSales}` },
  { h: "Phone", v: COMPANY.phone, href: COMPANY.phoneHref },
  { h: "Studio", v: COMPANY.address, href: "https://maps.google.com/?q=I+Square+Corporate+Park+Science+City+Ahmedabad" },
  { h: "Hours", v: COMPANY.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <div className="container-shell pb-20 pt-16 md:pb-28 md:pt-20">
      <StatusChip status="active" label="Replies in 24h" />
      <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
        Let&apos;s work together.
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
        Have a project in mind? Tell us about it. We will get back to you
        within 24 hours — no obligation, no hard sell.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <dl className="grid content-start gap-0 border-t hairline-ink">
          {ROWS.map((r) => (
            <div key={r.h} className="grid gap-1 border-b hairline-ink py-5 sm:grid-cols-[140px_1fr] sm:gap-4">
              <dt className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">{r.h}</dt>
              <dd className="tnum min-w-0 break-words font-mono text-[13px] font-medium text-[#231F20]">
                {r.href ? (
                  <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-[#0e6e9e]">
                    {r.v}
                  </a>
                ) : (
                  r.v
                )}
              </dd>
            </div>
          ))}
          <div className="flex gap-2 pt-5">
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="btn-ghost-square px-4 py-2 font-mono text-xs">LinkedIn</a>
            <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="btn-ghost-square px-4 py-2 font-mono text-xs">Instagram</a>
          </div>
        </dl>
        <Reveal delay={0.1}>
          <div className="card-ring p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
