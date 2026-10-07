import type { Metadata, Viewport } from "next";
import { Fredoka, Lexend } from "next/font/google";
import "./globals.css";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  themeColor,
} from "./site";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Zappy",
    "Zappy Online Store",
    "online toy store",
    "kids toys",
    "RC cars",
    "remote control cars",
    "drones",
    "kids ride-ons",
    "scooters",
    "gadgets",
    "home gadgets",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "shopping",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
