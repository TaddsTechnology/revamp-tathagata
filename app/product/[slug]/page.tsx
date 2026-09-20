import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { MetricsGrid } from "@/components/MetricsGrid";
import { Reveal } from "@/components/Reveal";
import { StatusChip } from "@/components/StatusChip";
import { COMPANY, PRODUCTS } from "@/lib/data";
import { SITE_URL, canonical } from "@/lib/seo";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product" };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords,
    alternates: canonical(`/product/${product.slug}`),
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      type: "website",
      url: `${SITE_URL}/product/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();
  const other = PRODUCTS.find((p) => p.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: product.metaDescription,
    url: `${SITE_URL}/product/${product.slug}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      email: COMPANY.emailSales,
      telephone: COMPANY.phone,
      address: COMPANY.address,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pb-20 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container-shell pt-16 md:pt-20">
        <StatusChip status="active" label={product.tag} />
        <h1 className="headline-fluid mt-6 max-w-[752px] text-[#231F20]">
          {product.name} — {product.headline}
        </h1>
        <p className="mt-4 max-w-[560px] text-[16px] leading-relaxed text-[#231F20]/80">
          {product.body}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-square px-8 py-4 text-[20px]">
            Book a demo
            <span aria-hidden="true" className="text-[12px]">↗</span>
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-square px-8 py-4 text-[16px]"
          >
            Ask on WhatsApp
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {product.bullets.map((b) => (
            <li key={b} className="tnum font-mono text-[13px] text-[#5F6B76]">
              <span aria-hidden="true" className="mr-2 text-[#35b7ea]">+</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-shell mt-14">
        <Reveal>
          <MetricsGrid
            items={product.stats}
          />
        </Reveal>
      </div>

      <div className="container-shell mt-20 md:mt-24">
        <h2 className="headline-fluid max-w-[752px] text-[#231F20]">
          Everything inside {product.name}.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f) => (
            <Reveal key={f.h}>
              <article className="card-ring h-full p-7">
                <h3 className="font-medium tracking-tight text-[#231F20]">{f.h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#231F20]/80">{f.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-shell mt-20 md:mt-24">
        <div className="card-ring grid gap-8 bg-[#E8F6FE] p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-medium tracking-tight text-[#231F20]">
              Built for teams like yours.
            </h2>
            <p className="mt-2 text-[15px] text-[#231F20]/80">
              If this sounds like you, {product.name} fits on day one.
            </p>
          </div>
          <ul className="grid content-start gap-3">
            {product.audience.map((a) => (
              <li key={a} className="flex items-center gap-3 text-[15px] font-medium text-[#231F20]">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#35b7ea]" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-shell mt-20 max-w-4xl md:mt-24">
        <h2 className="headline-fluid text-[#231F20]">
          Questions, answered.
        </h2>
        <div className="mt-8 border-t hairline-ink">
          {product.faqs.map((f) => (
            <details key={f.q} className="group border-b hairline-ink py-5">
              <summary className="cursor-pointer list-none text-lg font-medium tracking-tight text-[#231F20] hover:text-[#0e6e9e]">
                <span aria-hidden="true" className="mr-3 text-[#35b7ea] group-open:hidden">+</span>
                <span aria-hidden="true" className="mr-3 hidden text-[#35b7ea] group-open:inline">−</span>
                {f.q}
              </summary>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-[#231F20]/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="container-shell mt-16">
        <CTABanner
          title={`See ${product.name} on your own data.`}
          body="A 20 minute demo on your shop, your staff, your numbers."
        />
        {other ? (
          <p className="tnum mt-8 text-center font-mono text-[13px] text-[#5F6B76]">
            Also from us:{" "}
            <Link href={`/product/${other.slug}`} className="text-[#0e6e9e] hover:text-[#231F20]">
              {other.name} — {other.headline}
            </Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
