"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { StatusChip } from "./StatusChip";

export function HeroHome() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-rise",
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: "expo.out", delay: 0.1 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative flex min-h-[100svh] items-end overflow-hidden bg-black">
      <Image
        src="/ascii-hero.png"
        alt="ASCII-art landscape of glowing code forming a tree at night"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="scrim-dark absolute inset-0" />

      <div className="container-shell relative w-full pb-20 pt-44 md:pb-24">
        <div className="hero-rise flex flex-wrap items-center gap-3">
          <StatusChip status="active" label="Digital product engineering partner" />
          <StatusChip status="pass" label="Est. 2025" />
        </div>
        <h1 className="hero-rise headline-fluid mt-6 max-w-[752px] text-white">
          We build scalable technology.
        </h1>
        <p className="hero-rise mt-5 max-w-[560px] text-[16px] leading-relaxed text-[#e7e7e7]">
          From AI systems to high-performance web and mobile applications, we
          design and engineer digital products built for growth.
        </p>
        <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-square-light px-8 py-4 text-[20px]">
            Start your project
            <span aria-hidden="true" className="text-[12px]">↗</span>
          </Link>
          <Link href="/projects" className="btn-ghost-light px-8 py-4 text-[20px]">
            View our work
          </Link>
        </div>
      </div>
    </div>
  );
}
