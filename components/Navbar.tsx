"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b hairline-ink bg-[#FFFEFE]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-between gap-4 px-6 md:px-14">
          <Link
            href="/"
            className="min-w-0 shrink-0"
            aria-label="Tathagata Technology home"
          >
            <Image
              src={COMPANY.logo}
              alt="Tathagata Technology"
              width={473}
              height={259}
              sizes="260px"
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contact").map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={`text-[16px] text-[#231F20] transition-colors duration-200 hover:text-[#1493cb] ${
                  pathname === l.href ? "text-[#1493cb]" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-square px-3 py-2 text-sm">
              Book a demo
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center border hairline-ink lg:hidden"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 h-[2px] w-5 bg-[#231F20]" />
              <span className="absolute left-0 top-[7px] h-[2px] w-5 bg-[#231F20]" />
              <span className="absolute left-0 top-[14px] h-[2px] w-5 bg-[#231F20]" />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FFFEFE] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="shrink-0">
              <Image
                src={COMPANY.logo}
                alt="Tathagata Technology"
                width={473}
                height={259}
                className="h-16 w-auto"
              />
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center border hairline-ink text-2xl text-[#231F20]"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b hairline-ink py-4 text-3xl font-medium tracking-tight text-[#231F20] hover:text-[#1493cb]"
              >
                <span className="tnum mr-4 font-mono text-sm text-[#5F6B76]">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-square mt-8 px-3 py-4 text-lg"
            >
              Book a demo
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
