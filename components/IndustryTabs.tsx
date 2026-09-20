"use client";

import { useState } from "react";
import { INDUSTRIES } from "@/lib/data";

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const cur = INDUSTRIES[active];
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Industries">
        {INDUSTRIES.map((ind, i) => (
          <button
            key={ind.name}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
              i === active
                ? "bg-[#231F20] text-white"
                : "border hairline-ink bg-transparent text-[#5F6B76] hover:border-[#35b7ea] hover:text-[#231F20]"
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>
      <div key={cur.name} className="card-ring mt-5 grid gap-6 bg-[#E8F6FE] p-7 md:grid-cols-2">
        <div>
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#0e6e9e]">Challenge</p>
          <p className="mt-2 leading-relaxed text-[#231F20]">{cur.challenge}</p>
        </div>
        <div className="border-t hairline-ink pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <p className="tnum font-mono text-xs uppercase tracking-wider text-[#0e6e9e]">Fix</p>
          <p className="mt-2 leading-relaxed text-[#231F20]">{cur.fix}</p>
        </div>
      </div>
    </div>
  );
}
