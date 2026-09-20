import type { MetadataRoute } from "next";
import { POSTS, PRODUCTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tathagatatechnology.in";
  const routes = ["", "/about", "/services", "/projects", "/product", "/blog", "/contact"];
  const productRoutes = PRODUCTS.map((p) => `/product/${p.slug}`);
  const postRoutes = POSTS.map((p) => `/blog/${p.slug}`);
  return [...routes, ...productRoutes, ...postRoutes].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : r.startsWith("/product/") ? 0.9 : 0.8,
  }));
}
