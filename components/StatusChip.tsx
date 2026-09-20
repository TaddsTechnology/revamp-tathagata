const DOTS: Record<string, string> = {
  pass: "#1493cb",
  ok: "#1493cb",
  warn: "#9aa4ae",
  fail: "#231f20",
  error: "#231f20",
  info: "#35b7ea",
  active: "#35b7ea",
};

export function StatusChip({ status, label }: { status: keyof typeof DOTS | string; label: string }) {
  const color = DOTS[status] ?? "#9aa4ae";
  return (
    <span className="v-chip">
      <span className="dot" style={{ background: color }} aria-hidden="true" />
      {label}
    </span>
  );
}
