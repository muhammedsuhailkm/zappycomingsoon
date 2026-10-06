import type { Metadata, Viewport } from "next";
import { Fredoka, Lexend } from "next/font/google";
import "./globals.css";

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
  title: "Zappy Online Store — Coming Soon",
  description:
    "Zappy Online Store is launching soon. Kids · Mobility · RC · Home · Gadgets.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d90f16",
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
