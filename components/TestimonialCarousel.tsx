"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TESTIMONIALS } from "@/lib/data";

const DURATION = 6000;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setInterval(() => go(1), DURATION);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, reduce, go, index]);

  const t = TESTIMONIALS[index];

  return (
    <section
      aria-label="Client feedback"
      aria-roledescription="carousel"
      className="container-shell pb-20 md:pb-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="card-ring relative overflow-hidden bg-[#E8F6FE] p-8 md:p-12">
        <div className="flex items-center justify-between gap-3">
          <span aria-label="Rated 5 out of 5" className="text-lg tracking-[0.2em] text-[#1493cb]">
            ★★★★★
          </span>
          <span aria-hidden="true" className="font-mono text-5xl leading-none text-[#35B7EA]">
            &ldquo;
          </span>
        </div>

        <div className="relative mt-4 min-h-[190px] sm:min-h-[150px]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -32 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className="max-w-3xl text-balance text-xl font-medium leading-snug tracking-tight text-[#231F20] md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="tnum flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#231F20] font-mono text-sm font-bold text-white"
                >
                  {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-[#231F20]">{t.name}</span>
                  <span className="block truncate font-mono text-xs text-[#5F6B76]">{t.role}</span>
                </span>
                <span className="tnum ml-auto hidden shrink-0 font-mono text-xs text-[#0e6e9e] sm:block">
                  {t.project}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-4 border-t hairline-ink pt-5">
          <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={`h-2 transition-[width,background-color] duration-300 ${
                  i === index ? "w-8 bg-[#1493cb]" : "w-2 bg-[#231F20]/20 hover:bg-[#231F20]/40"
                }`}
              />
            ))}
          </div>
          <span className="tnum font-mono text-xs text-[#5F6B76]">
            0{index + 1} / 0{TESTIMONIALS.length}
          </span>
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border hairline-ink text-lg text-[#231F20] transition-colors duration-200 hover:border-[#35b7ea] hover:text-[#0e6e9e]"
            >
              ←
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border hairline-ink text-lg text-[#231F20] transition-colors duration-200 hover:border-[#35b7ea] hover:text-[#0e6e9e]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
