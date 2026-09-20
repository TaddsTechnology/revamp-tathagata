import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/data";
import { SITE_URL, canonical, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tathagata Technology — Web & App Development, AI Solutions",
    template: "%s — Tathagata Technology",
  },
  description:
    "Tathagata Technology is a digital product engineering partner in Ahmedabad — web development, mobile apps, AI solutions, digital marketing, and custom software. Plus CartPOS billing and HRMS Suite.",
  keywords: [
    "IT company Ahmedabad",
    "web development Ahmedabad",
    "mobile app development",
    "AI solutions India",
    "digital marketing",
    "custom software development",
    "Tathagata Technology",
    "CartPOS",
    "HRMS software",
  ],
  authors: [{ name: COMPANY.name }],
  alternates: canonical("/"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: "Tathagata Technology — We build scalable technology",
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tathagata Technology — We build scalable technology",
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFEFE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#FFFEFE] text-[#231F20]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#231F20] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
