import { StatusChip } from "./StatusChip";

const EVENTS = [
  { id: "WEB-01", status: "pass", label: "PASS" },
  { id: "APP-02", status: "pass", label: "PASS" },
  { id: "AI-03", status: "pass", label: "PASS" },
  { id: "SEO-04", status: "pass", label: "PASS" },
  { id: "SUPPORT", status: "pass", label: "PASS" },
];

const SPANS = [
  { name: "Scope & quote", start: "Week 1", dur: "fixed", left: 0, width: 16, focus: false },
  { name: "Design & build", start: "Week 2", dur: "4–8 wks", left: 14, width: 34, focus: true },
  { name: "Testing & QA", start: "Week 6", dur: "rigorous", left: 46, width: 22, focus: false },
  { name: "Launch", start: "Week 8", dur: "on time", left: 66, width: 14, focus: false },
  { name: "30-day support", start: "Post", dur: "included", left: 78, width: 22, focus: true },
];

export function EventStream() {
  return (
    <section aria-labelledby="stream-h" className="card-ring">
      <div className="flex flex-wrap items-center gap-3 border-b hairline-ink px-5 py-4">
        <h2 id="stream-h" className="tnum font-mono text-sm font-semibold text-[#231F20]">
          delivery pipeline · 4–8 weeks
        </h2>
        <span className="ml-auto flex gap-2">
          <StatusChip status="info" label="Fixed quote" />
          <StatusChip status="pass" label="On time" />
        </span>
      </div>
      <div className="grid md:grid-cols-[240px_1fr]">
        <ul className="max-h-72 overflow-y-auto border-b hairline-ink md:border-b-0 md:border-r" aria-label="Events">
          {EVENTS.map((e) => (
            <li
              key={e.id}
              className="flex items-center gap-3 border-b hairline-ink px-5 py-3 last:border-b-0"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "#1493cb" }}
                aria-hidden="true"
              />
              <span className="tnum font-mono text-[13px] text-[#5F6B76]">{e.id}</span>
              <span className="tnum ml-auto font-mono text-xs text-[#5F6B76]">{e.label}</span>
            </li>
          ))}
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr className="border-b hairline-ink bg-[#E8F6FE]/50 text-left">
                <th scope="col" className="px-5 py-3 font-mono text-xs font-normal uppercase tracking-wider text-[#5F6B76]">Span</th>
                <th scope="col" className="px-5 py-3 font-mono text-xs font-normal uppercase tracking-wider text-[#5F6B76]">Start</th>
                <th scope="col" className="px-5 py-3 font-mono text-xs font-normal uppercase tracking-wider text-[#5F6B76]">Duration</th>
              </tr>
            </thead>
            <tbody>
              {SPANS.map((s) => (
                <tr key={s.name} className="border-b hairline-ink last:border-b-0">
                  <td className="px-5 py-3 font-mono text-[13px] font-medium text-[#231F20]">{s.name}</td>
                  <td className="tnum px-5 py-3 font-mono text-[13px] text-[#5F6B76]">{s.start}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-1.5 w-full rounded-[2px] bg-[#231F20]/8">
                        <div
                          className="absolute h-full rounded-[2px]"
                          style={{
                            left: `${s.left}%`,
                            width: `${s.width}%`,
                            background: s.focus ? "#35b7ea" : "rgba(35,31,32,0.25)",
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="tnum shrink-0 font-mono text-xs text-[#5F6B76]">{s.dur}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
