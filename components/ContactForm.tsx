"use client";

import { useRef, useState } from "react";
import { BUDGETS, COMPANY } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", budget: "", message: "" });
  const [error, setError] = useState("");
  const errorRef = useRef<HTMLParagraphElement>(null);

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function fail(msg: string) {
    setError(msg);
    requestAnimationFrame(() => errorRef.current?.focus());
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      fail("Add your name, email and project details, then send again.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      fail("That email does not look right. Check it and send again.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Website inquiry from ${form.name} — ${form.budget || "New project"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.emailSales}?subject=${subject}&body=${body}`;
  }

  const inputCls =
    "w-full border hairline-ink bg-white px-4 py-3 text-sm text-[#231F20] placeholder:text-[#5F6B76]/70 outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#35b7ea] focus:ring-4 focus:ring-[#35b7ea]/20";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="cf-name" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Full name
          </label>
          <input id="cf-name" name="name" autoComplete="name" className={inputCls} placeholder="Aarav Patel…" value={form.name} onChange={update("name")} />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="cf-email" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Work email
          </label>
          <input id="cf-email" name="email" type="email" autoComplete="email" spellCheck={false} className={inputCls} placeholder="you@company.com…" value={form.email} onChange={update("email")} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="cf-company" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Company name
          </label>
          <input id="cf-company" name="company" autoComplete="organization" className={inputCls} placeholder="Your company…" value={form.company} onChange={update("company")} />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <label htmlFor="cf-phone" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
            Phone (optional)
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+91 98765 43210…" value={form.phone} onChange={update("phone")} />
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <label htmlFor="cf-budget" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
          Project budget
        </label>
        <select id="cf-budget" name="budget" autoComplete="off" className={`${inputCls} bg-white text-[#231F20]`} value={form.budget} onChange={update("budget")}>
          <option value="">Select budget range…</option>
          {BUDGETS.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <label htmlFor="cf-msg" className="tnum font-mono text-xs uppercase tracking-wider text-[#5F6B76]">
          Project details
        </label>
        <textarea
          id="cf-msg"
          name="message"
          rows={5}
          autoComplete="off"
          className={`${inputCls} resize-y break-words`}
          placeholder="What do you want built? Timeline, features, links…"
          value={form.message}
          onChange={update("message")}
        />
        <p className="tnum font-mono text-xs text-[#5F6B76]">No spam. A person replies within 24 hours on business days.</p>
      </div>
      {error ? (
        <p ref={errorRef} tabIndex={-1} role="alert" className="border border-red-500/40 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn-square px-8 py-4 text-[16px]">
        Send inquiry
      </button>
    </form>
  );
}
