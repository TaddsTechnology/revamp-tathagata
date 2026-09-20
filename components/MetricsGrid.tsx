const METRICS = [
  { value: "11+", unit: "projects", sub: "Completed for happy clients" },
  { value: "6+", unit: "clients", sub: "Across India and internationally" },
  { value: "2+", unit: "countries", sub: "Countries served and counting" },
  { value: "18+", unit: "portfolio", sub: "Portfolio projects delivered" },
];

export function MetricsGrid({
  items = METRICS,
}: {
  items?: { value: string; unit: string; sub: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-px bg-[rgba(35,31,32,0.14)] lg:grid-cols-4">
      {items.map((m) => (
        <div key={m.unit} className="bg-[#FFFEFE] p-6 md:p-8">
          <dd className="tnum text-[56px] font-medium leading-none tracking-[-3.36px] text-[#231F20]">
            {m.value}
            <span className="ml-2 align-middle font-mono text-sm font-normal tracking-normal text-[#5F6B76]">
              {m.unit}
            </span>
          </dd>
          <dt className="mt-3 text-sm leading-relaxed text-[#5F6B76]">{m.sub}</dt>
        </div>
      ))}
    </dl>
  );
}
