import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t hairline-ink bg-white text-[#231F20]">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <Image
            src={COMPANY.logo}
            alt="Tathagata Technology"
            width={473}
            height={259}
            className="h-20 w-auto"
          />
          <p className="max-w-[38ch] text-sm leading-relaxed text-[#5F6B76]">
            {COMPANY.tagline} We build cutting-edge web applications, mobile solutions, and AI-powered platforms.
          </p>
          <div className="flex flex-wrap gap-2">
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="btn-ghost-square px-4 py-2 font-mono text-xs">
              LinkedIn
            </a>
            <a href={COMPANY.instagram} target="_blank" rel="noreferrer" className="btn-ghost-square px-4 py-2 font-mono text-xs">
              Instagram
            </a>
            <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost-square px-4 py-2 font-mono text-xs">
              WhatsApp
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Footer">
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">Pages</p>
          {NAV_LINKS.slice(0, 4).map((l) => (
            <Link key={l.href} href={l.href} className="w-fit text-[16px] text-[#231F20] hover:text-[#1493cb]">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3" aria-label="Footer more">
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">More</p>
          {NAV_LINKS.slice(4).map((l) => (
            <Link key={l.href} href={l.href} className="w-fit text-[16px] text-[#231F20] hover:text-[#1493cb]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">Contact</p>
          <a href={`mailto:${COMPANY.emailGeneral}`} className="tnum w-fit font-mono text-[13px] text-[#231F20] hover:text-[#1493cb]">
            {COMPANY.emailGeneral}
          </a>
          <a href={`mailto:${COMPANY.emailSales}`} className="tnum w-fit font-mono text-[13px] text-[#231F20] hover:text-[#1493cb]">
            {COMPANY.emailSales}
          </a>
          <a href={COMPANY.phoneHref} className="tnum w-fit font-mono text-[13px] text-[#231F20] hover:text-[#1493cb]">
            {COMPANY.phone}
          </a>
          <p className="text-[#5F6B76]">{COMPANY.address}</p>
          <p className="tnum text-[#5F6B76]">{COMPANY.hours}</p>
        </div>
      </div>
      <div className="border-t hairline-ink">
        <div className="container-shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="tnum font-mono text-xs text-[#5F6B76]">© {new Date().getFullYear()} TATHAGATA TECHNOLOGY</p>
          <p className="tnum font-mono text-xs text-[#5F6B76]">AHMEDABAD, SHIPPING WEEKLY</p>
        </div>
      </div>
    </footer>
  );
}
