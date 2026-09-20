import { StatusChip } from "./StatusChip";

const REGRESSION = [
  { name: "Fast delivery · 4–8 weeks", chip: "pass" as const, label: "PASS", delta: "On time" },
  { name: "Sites load under 2 seconds", chip: "pass" as const, label: "PASS", delta: "< 2s" },
  { name: "Enterprise-grade security", chip: "pass" as const, label: "PASS", delta: "Backed up" },
  { name: "30-day support included", chip: "pass" as const, label: "PASS", delta: "Free" },
];

const CLUSTERS = [
  { name: "Web development", pct: 35 },
  { name: "Mobile apps", pct: 25 },
  { name: "AI solutions", pct: 25 },
  { name: "Marketing & growth", pct: 15 },
];

const DIFF = [
  { kind: "add" as const, text: "+ respond.within(24, HOURS)" },
  { kind: "add" as const, text: "+ test.everything.before(launch)" },
  { kind: "mod" as const, text: "~ deadline.plan.ahead()" },
  { kind: "del" as const, text: "- hidden.fees()" },
];

export function BentoGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="card-ring p-6">
        <h3 className="text-lg font-medium tracking-tight text-[#231F20]">The Tathagata advantage</h3>
        <ul className="mt-5 grid gap-3">
          {REGRESSION.map((r) => (
            <li key={r.name} className="flex items-center gap-3 border-b hairline-ink pb-3 last:border-b-0 last:pb-0">
              <StatusChip status={r.chip} label={r.label} />
              <span className="min-w-0 truncate font-mono text-[13px] text-[#231F20]">{r.name}</span>
              <span className="tnum ml-auto shrink-0 font-mono text-xs text-[#5F6B76]">{r.delta}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-ring p-6">
        <h3 className="text-lg font-medium tracking-tight text-[#231F20]">What we ship</h3>
        <ul className="mt-5 grid gap-4">
          {CLUSTERS.map((c) => (
            <li key={c.name}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-[13px] text-[#231F20]">{c.name}</span>
                <span className="tnum font-mono text-xs text-[#5F6B76]">{c.pct}%</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-[2px] bg-[#231F20]/8">
                <div
                  className="h-full rounded-[2px]"
                  style={{
                    width: `${c.pct}%`,
                    background: c.pct >= 30 ? "#35b7ea" : "rgba(35,31,32,0.25)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-ring p-6">
        <h3 className="text-lg font-medium tracking-tight text-[#231F20]">How we work, in code</h3>
        <div className="mt-5 grid gap-2" role="img" aria-label="Code-style illustration of our working principles">
          {DIFF.map((d, i) => (
            <p
              key={i}
              className="tnum truncate border-l-2 bg-[#E8F6FE] px-3 py-2 font-mono text-xs text-[#231F20]"
              style={{ borderColor: d.kind === "add" ? "#35b7ea" : d.kind === "mod" ? "#1493cb" : "#9aa4ae" }}
            >
              {d.text}
            </p>
          ))}
        </div>
        <p className="tnum mt-4 font-mono text-xs text-[#5F6B76]">no spam · no hidden fees · no hard sell</p>
      </div>
    </div>
  );
}
