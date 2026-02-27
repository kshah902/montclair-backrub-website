import { BusinessInfo } from "@/types/services";

export const business: BusinessInfo = {
  name: "Montclair Backrub, Massage & Bodyrub",
  phones: ["+1 (973) 851-8187"],
  homeVisitSurcharge: 60,
  homeVisitRadius: "15 minutes",
  salesTaxRate: 0.06625,
  email: "info@montclairbackrub.com",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
