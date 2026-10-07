import Image from "next/image";
import NotifyForm from "./notify-form";
import { siteDescription, siteName, siteUrl } from "./site";

const categories = ["Kids", "Mobility", "RC", "Home", "Gadgets"];

// Structured data so search engines understand who the site belongs to.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <div className="zappy-bg flex flex-1 flex-col items-center overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex w-full max-w-6xl flex-1 flex-col items-center gap-6 px-4 pt-[max(1.5rem,env(safe-area-inset-top))] pb-6 sm:gap-10 sm:px-8 sm:py-12">
        {/* Wide banner on larger screens */}
        <Image
          src="/zappy-banner.jpg"
          alt="Zappy Online Store — Kids, Mobility, RC, Home, Gadgets"
          width={3417}
          height={1300}
          quality={95}
          preload
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="hidden h-auto w-full rounded-3xl shadow-2xl ring-4 ring-zappy-yellow/70 md:block"
        />

        {/* Mascot + wordmark on phones */}
        <div className="flex w-full flex-col items-center gap-4 md:hidden">
          <p className="font-display text-5xl font-bold sm:text-6xl text-zappy-yellow drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]">
            Zappy
          </p>
          <p className="-mt-3 font-display text-base tracking-widest sm:text-lg text-zappy-yellow">
            ONLINE STORE
          </p>
          <Image
            src="/zappy-mascot.png"
            alt="Zappy mascot carrying shopping bags full of toys"
            width={1152}
            height={1160}
            quality={95}
            preload
            sizes="(min-width: 640px) 384px, 80vw"
            className="animate-zappy-bounce h-auto w-4/5 max-w-sm rounded-3xl shadow-2xl"
          />
        </div>

        <section className="flex w-full flex-col items-center gap-5 text-center sm:gap-6">
          <span className="rounded-full bg-zappy-yellow px-4 py-1 font-display text-xs font-bold uppercase tracking-widest text-zappy-red-dark sm:text-sm">
            Launching soon
          </span>
          <h1 className="font-display text-[2rem] font-bold leading-tight text-balance min-[400px]:text-4xl sm:text-6xl">
            Something <span className="text-zappy-yellow">Zappy</span> is
            <br className="hidden sm:block" /> on its way!
          </h1>
          <p className="max-w-xl text-[0.95rem] text-white/85 text-pretty sm:text-lg">
            We&apos;re packing our bags with the coolest toys, RC cars, drones,
            ride-ons and gadgets. Be the first to know when the store opens.
          </p>

          <NotifyForm />

          <ul
            aria-label="Shop categories"
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {categories.map((c) => (
              <li
                key={c}
                className="rounded-full border-2 border-zappy-yellow/70 px-3.5 py-1 font-display text-sm font-semibold text-zappy-yellow sm:px-4 sm:py-1.5 sm:text-base"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="w-full px-4 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center text-xs text-white/70 sm:text-sm">
        © {new Date().getFullYear()} Zappy Online Store. All rights reserved.
      </footer>
    </div>
  );
}
