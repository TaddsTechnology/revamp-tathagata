"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { JOURNEY } from "@/lib/data";
import { Reveal } from "./Reveal";
import { StatusChip } from "./StatusChip";

function stageFor(index: number, total: number, chip: string) {
  if (index === 0) return "Founded";
  if (index === total - 1) return "Now";
  return chip === "pass" ? "Shipped" : "Live";
}

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="journey-h"
      className="container-shell pb-20 md:pb-28"
    >
      <Reveal>
        <p className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
          Our journey
        </p>
        <h2
          id="journey-h"
          className="headline-fluid mt-3 max-w-[752px] text-[#231F20]"
        >
          Traced, year by year.
        </h2>
        <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
          From a small Ahmedabad setup to products running at counters and
          offices across India — every milestone shipped, not promised.
        </p>
      </Reveal>

      <div className="relative mt-14">
        {/* spine: hairline base + accent progress fill */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[5px] top-2 w-px bg-[#231F20]/15 md:left-1/2 md:-translate-x-1/2"
        />
        {!reduce ? (
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[5px] top-2 w-[3px] -translate-x-[1px] md:left-1/2 md:-translate-x-1/2"
          >
            <motion.div
              style={{ scaleY: progress }}
              className="h-full w-full origin-top bg-[#35B7EA]"
            />
          </div>
        ) : null}

        <div className="grid gap-10 md:gap-0">
          {JOURNEY.map((j, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={`${j.title}-${i}`}
                className={`relative pl-10 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-14" : "md:ml-auto md:pl-14"
                } ${i > 0 ? "md:-mt-6" : ""} pb-2 md:pb-14 md:last:pb-0`}
              >
                {/* node dot */}
                <span
                  aria-hidden="true"
                  className={`absolute top-1.5 h-3 w-3 rounded-full bg-[#35B7EA] ring-4 ring-[#E8F6FE] transition-transform duration-300 ${
                    left
                      ? "left-0 md:left-auto md:-right-[7px]"
                      : "left-0 md:-left-[7px]"
                  }`}
                />
                <Reveal
                  className="group card-ring bg-white p-6 text-left transition-[border-color,box-shadow] duration-300 hover:border-[#35B7EA] md:p-7"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="tnum font-mono text-4xl font-medium tracking-[-0.05em] text-[#231F20]/15 transition-colors duration-300 group-hover:text-[#35B7EA]">
                      0{i + 1}
                    </span>
                    <StatusChip status={j.chip} label={stageFor(i, JOURNEY.length, j.chip)} />
                    <span className="tnum font-mono text-xs text-[#5F6B76]">
                      {j.year}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium tracking-tight text-[#231F20]">
                    {j.title}
                  </h3>
                  <p className="mt-1 max-w-[52ch] text-[15px] leading-relaxed text-[#231F20]/80">
                    {j.text}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
