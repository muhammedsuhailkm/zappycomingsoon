import type { MetadataRoute } from "next";
import { siteDescription, siteName, themeColor } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Zappy",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: themeColor,
    theme_color: themeColor,
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
