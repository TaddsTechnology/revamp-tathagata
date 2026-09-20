import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  body,
  align = "left",
}: {
  kicker?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-[752px] flex-col gap-4 ${alignCls}`}>
      {kicker ? (
        <p className="tnum font-mono text-[13px] text-[#0e6e9e]">{kicker}</p>
      ) : null}
      <h2 className="headline-fluid text-[#231F20]">
        {title}
      </h2>
      {body ? <p className="max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">{body}</p> : null}
    </Reveal>
  );
}
