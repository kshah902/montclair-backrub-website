import { Metadata } from "next";
import { business } from "@/data/business";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://montclairbackrub.com";

export function createMetadata(options: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${options.title} | ${business.name}`;
  return {
    title: fullTitle,
    description: options.description,
    openGraph: {
      title: fullTitle,
      description: options.description,
      url: `${BASE_URL}${options.path}`,
      siteName: business.name,
      images: options.image ? [{ url: options.image }] : undefined,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: options.description,
    },
    alternates: {
      canonical: `${BASE_URL}${options.path}`,
    },
  };
}
