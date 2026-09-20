import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tathagata Technology — IT Company in Ahmedabad",
    short_name: "Tathagata",
    description: COMPANY.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFEFE",
    theme_color: "#FFFEFE",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
