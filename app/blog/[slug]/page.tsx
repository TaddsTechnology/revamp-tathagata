import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { COMPANY, POSTS } from "@/lib/data";
import { SITE_URL, canonical } from "@/lib/seo";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog post" };
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.tag, "Tathagata Technology blog"],
    alternates: canonical(`/blog/${post.slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [COMPANY.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    publisher: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="container-shell max-w-3xl pb-20 pt-16 md:pb-28 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Link href="/blog" className="font-semibold text-[#0e6e9e] hover:text-[#231F20]">
        ← All articles
      </Link>
      <p className="tnum mt-8 font-mono text-[13px] uppercase tracking-wider text-[#5F6B76]">
        {post.tag} / {post.date} / {post.readTime}
      </p>
      <h1 className="headline-fluid mt-4 text-[#231F20]">
        {post.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[#231F20]/80">{post.excerpt}</p>
      <div className="mt-8 grid gap-5 border-t hairline-ink pt-8">
        {post.body.map((para, i) => (
          <p key={i} className="max-w-[68ch] leading-relaxed text-[#231F20]/90">
            {para}
          </p>
        ))}
      </div>
      <div className="mt-12">
        <CTABanner title="Want this done for you?" body="Tell us the goal. Get scope and a fixed quote." />
      </div>
    </div>
  );
}
