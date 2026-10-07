// Shared site details for metadata, robots, sitemap and manifest.
// Link previews and search engines need absolute URLs.
// Set NEXT_PUBLIC_SITE_URL to the live domain, e.g. https://zappy.in
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/+$/, "");

export const siteName = "Zappy Online Store";
export const siteTitle = "Zappy Online Store — Coming Soon";
export const siteDescription =
  "Something Zappy is on its way! Toys, RC cars, drones, ride-ons and gadgets. Kids · Mobility · RC · Home · Gadgets.";
export const themeColor = "#d90f16";
