"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data";

export function ServiceAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t hairline-ink">
      {SERVICES.map((s, i) => {
        const isOpen = i === open;
        return (
          <div key={s.slug} className="border-b hairline-ink">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 py-6 text-left"
            >
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 shrink-0 items-center justify-center text-lg font-medium transition-colors duration-200 ${
                  isOpen ? "bg-[#231F20] text-white" : "border hairline-ink text-[#231F20]"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
              <span className="text-lg font-medium tracking-tight text-[#231F20] md:text-xl">{s.title}</span>
              <span className="tnum ml-auto hidden font-mono text-xs text-[#5F6B76] sm:block">
                {s.stack.slice(0, 2).join(" / ")}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 pb-7 pl-12 pr-2 md:grid-cols-[1.2fr_1fr_1fr]">
                  <p className="max-w-[58ch] leading-relaxed text-[#231F20]/85">{s.summary}</p>
                  <div>
                    <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">Includes</p>
                    <ul className="mt-3 grid content-start gap-2">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 font-mono text-[13px] text-[#5F6B76]">
                          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#35b7ea]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">Key benefits</p>
                    <ul className="mt-3 grid content-start gap-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[13px] font-medium text-[#231F20]">
                          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#231F20]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
