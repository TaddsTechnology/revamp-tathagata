import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { Reveal } from "./Reveal";

export function CTABanner({
  title = "Tell us what you want built. Get a plan in 24 hours.",
  body = "One call and a fixed quote — most projects delivered in 4–8 weeks.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Reveal>
      <div className="bg-[#231F20] px-6 py-12 md:px-12 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[560px]">
            <h2 className="headline-fluid text-white">{title}</h2>
            <p className="mt-4 text-[16px] text-white/75">{body}</p>
            <p className="tnum mt-4 font-mono text-[13px] text-white/60">
              {COMPANY.phone}, {COMPANY.emailSales}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact" className="btn-square-light px-8 py-4 text-[20px]">
              Book a demo
              <span aria-hidden="true" className="text-[12px]">↗</span>
            </Link>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-light px-8 py-4 text-[16px]"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
