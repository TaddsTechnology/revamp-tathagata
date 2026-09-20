import { COMPANY } from "./data";

export const SITE_URL = "https://tathagatatechnology.in";

export function canonical(path: string) {
  return { canonical: path === "/" ? SITE_URL : `${SITE_URL}${path}` };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-wide.svg`,
  description: COMPANY.description,
  email: COMPANY.emailGeneral,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "611, I Square Corporate Park, Science City",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380060",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 11:00-19:00",
  sameAs: [COMPANY.linkedin, COMPANY.instagram],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.name,
  url: SITE_URL,
};
