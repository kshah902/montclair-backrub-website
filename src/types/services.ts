export type ServiceCategory = "table-massage" | "reiki" | "reflexology" | "chair-massage";

export interface Duration {
  label: string;
  minutes: number;
  individualPrice: number;
}

export interface Package {
  id: string;
  quantity: number;
  sessionsIncluded: number;
  totalPrice: number;
  perSessionPrice: number;
  discountDescription: string;
  discountPercent: number;
}

export interface ServiceDuration {
  duration: Duration;
  packages: Package[];
}

export interface Service {
  slug: ServiceCategory;
  name: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  image: string;
  durations: ServiceDuration[];
}

export interface BusinessInfo {
  name: string;
  phones: string[];
  homeVisitSurcharge: number;
  homeVisitRadius: string;
  salesTaxRate: number;
}

export interface Testimonial {
  name: string;
  text: string;
  service: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
