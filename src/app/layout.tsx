import type { Metadata } from "next";
import { playfairDisplay, sourceSans3 } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";
import { business } from "@/data/business";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: business.name,
    template: `%s | ${business.name}`,
  },
  description:
    "Professional massage therapy in Montclair, NJ. Table massage, reflexology, and chair massage with package savings up to 33%. Book online or call today.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://montclairbackrub.com"
  ),
  openGraph: {
    siteName: business.name,
    locale: "en_US",
    type: "website",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  telephone: business.phones,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montclair",
    addressRegion: "NJ",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://montclairbackrub.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${sourceSans3.variable}`}>
      <body className="min-h-screen font-body antialiased">
        <JsonLd data={businessJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
