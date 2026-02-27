import { Service, ServiceDuration, Package } from "@/types/services";

export const services: Service[] = [
  {
    slug: "table-massage",
    name: "Table Massage",
    shortDescription:
      "Full-body therapeutic massage on a professional massage table for deep relaxation and relief.",
    longDescription:
      "Our table massage is a full-body therapeutic experience designed to relieve tension, reduce stress, and promote deep relaxation. Whether you prefer Swedish, deep tissue, or a customized blend, our skilled therapists tailor each session to your individual needs. Sessions are available in 30-minute, 1-hour, 1.5-hour, and 2-hour durations.",
    benefits: [
      "Relieves chronic muscle tension and pain",
      "Reduces stress and promotes relaxation",
      "Improves circulation and flexibility",
      "Customized to your specific needs",
      "Available in multiple session lengths",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    durations: [
      {
        duration: { label: "Half-Hour", minutes: 30, individualPrice: 45 },
        packages: [
          {
            id: "table-30m-5pack",
            quantity: 5,
            sessionsIncluded: 6,
            totalPrice: 225,
            perSessionPrice: 37.5,
            discountDescription: "Buy 5, get 1 free",
            discountPercent: 16.67,
          },
          {
            id: "table-30m-10pack",
            quantity: 10,
            sessionsIncluded: 15,
            totalPrice: 450,
            perSessionPrice: 30,
            discountDescription: "Buy 10, get 5 free",
            discountPercent: 33.33,
          },
        ],
      },
      {
        duration: { label: "1-Hour", minutes: 60, individualPrice: 75 },
        packages: [
          {
            id: "table-1hr-3pack",
            quantity: 3,
            sessionsIncluded: 3,
            totalPrice: 202.5,
            perSessionPrice: 67.5,
            discountDescription: "Buy 3, save 10%",
            discountPercent: 10,
          },
          {
            id: "table-1hr-5pack",
            quantity: 5,
            sessionsIncluded: 6,
            totalPrice: 375,
            perSessionPrice: 62.5,
            discountDescription: "Buy 5, get 1 free",
            discountPercent: 16.67,
          },
          {
            id: "table-1hr-10pack",
            quantity: 10,
            sessionsIncluded: 15,
            totalPrice: 750,
            perSessionPrice: 50,
            discountDescription: "Buy 10, get 5 free",
            discountPercent: 33.33,
          },
          {
            id: "table-1hr-20pack",
            quantity: 20,
            sessionsIncluded: 26,
            totalPrice: 1050,
            perSessionPrice: 40.38,
            discountDescription: "Buy 20, save 30% (6 free)",
            discountPercent: 30,
          },
        ],
      },
      {
        duration: { label: "1.5-Hour", minutes: 90, individualPrice: 105 },
        packages: [
          {
            id: "table-90m-3pack",
            quantity: 3,
            sessionsIncluded: 3,
            totalPrice: 283.5,
            perSessionPrice: 94.5,
            discountDescription: "Buy 3, save 10%",
            discountPercent: 10,
          },
          {
            id: "table-90m-5pack",
            quantity: 5,
            sessionsIncluded: 6,
            totalPrice: 525,
            perSessionPrice: 87.5,
            discountDescription: "Buy 5, get 1 free",
            discountPercent: 16.67,
          },
          {
            id: "table-90m-10pack",
            quantity: 10,
            sessionsIncluded: 15,
            totalPrice: 1050,
            perSessionPrice: 70,
            discountDescription: "Buy 10, get 5 free",
            discountPercent: 33.33,
          },
          {
            id: "table-90m-20pack",
            quantity: 20,
            sessionsIncluded: 26,
            totalPrice: 1470,
            perSessionPrice: 56.54,
            discountDescription: "Buy 20, save 30% (6 free)",
            discountPercent: 30,
          },
        ],
      },
      {
        duration: { label: "2-Hour", minutes: 120, individualPrice: 135 },
        packages: [
          {
            id: "table-2hr-5pack",
            quantity: 5,
            sessionsIncluded: 6,
            totalPrice: 675,
            perSessionPrice: 112.5,
            discountDescription: "Buy 5, get 1 free",
            discountPercent: 16.67,
          },
          {
            id: "table-2hr-10pack",
            quantity: 10,
            sessionsIncluded: 15,
            totalPrice: 1350,
            perSessionPrice: 90,
            discountDescription: "Buy 10, get 5 free",
            discountPercent: 33.33,
          },
        ],
      },
    ],
  },
  {
    slug: "reflexology",
    name: "Reflexology",
    shortDescription:
      "Targeted pressure point therapy on the feet to promote healing and balance throughout the body.",
    longDescription:
      "Reflexology is a specialized therapy that applies targeted pressure to specific points on the feet, hands, and ears that correspond to different organs and systems in the body. This ancient healing art promotes natural balance, improves circulation, and encourages the body's own healing processes. Perfect for those seeking a holistic approach to wellness.",
    benefits: [
      "Promotes natural healing and balance",
      "Reduces anxiety and stress",
      "Improves nerve function and circulation",
      "Helps with headaches and migraines",
      "Supports overall wellness",
    ],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop",
    durations: [
      {
        duration: { label: "Half-Hour", minutes: 30, individualPrice: 45 },
        packages: [
          {
            id: "reflex-30m-5pack",
            quantity: 5,
            sessionsIncluded: 5,
            totalPrice: 202.5,
            perSessionPrice: 40.5,
            discountDescription: "Buy 5, save 10%",
            discountPercent: 10,
          },
          {
            id: "reflex-30m-10pack",
            quantity: 10,
            sessionsIncluded: 10,
            totalPrice: 382.5,
            perSessionPrice: 38.25,
            discountDescription: "Buy 10, save 15%",
            discountPercent: 15,
          },
          {
            id: "reflex-30m-20pack",
            quantity: 20,
            sessionsIncluded: 24,
            totalPrice: 750,
            perSessionPrice: 31.25,
            discountDescription: "Buy 20, save 20% (4 free)",
            discountPercent: 20,
          },
        ],
      },
      {
        duration: { label: "1-Hour", minutes: 60, individualPrice: 80 },
        packages: [
          {
            id: "reflex-1hr-3pack",
            quantity: 3,
            sessionsIncluded: 3,
            totalPrice: 216,
            perSessionPrice: 72,
            discountDescription: "Buy 3, save 10%",
            discountPercent: 10,
          },
          {
            id: "reflex-1hr-5pack",
            quantity: 5,
            sessionsIncluded: 5,
            totalPrice: 340,
            perSessionPrice: 68,
            discountDescription: "Buy 5, save 15%",
            discountPercent: 15,
          },
          {
            id: "reflex-1hr-10pack",
            quantity: 10,
            sessionsIncluded: 12,
            totalPrice: 640,
            perSessionPrice: 53.33,
            discountDescription: "Buy 10, save 20% (2 free)",
            discountPercent: 20,
          },
          {
            id: "reflex-1hr-20pack",
            quantity: 20,
            sessionsIncluded: 26,
            totalPrice: 1120,
            perSessionPrice: 43.08,
            discountDescription: "Buy 20, save 20% (6 free)",
            discountPercent: 20,
          },
        ],
      },
    ],
  },
  {
    slug: "chair-massage",
    name: "Chair Massage",
    shortDescription:
      "Quick, convenient massage sessions on a specialized chair — perfect for the office or on-the-go relief.",
    longDescription:
      "Our chair massage is perfect for those short on time but in need of relief. Performed on a specially designed massage chair, these focused sessions target the neck, shoulders, back, and arms — the areas where stress accumulates most. Ideal for corporate events, office wellness programs, or a quick pick-me-up between appointments.",
    benefits: [
      "No need to undress — fully clothed massage",
      "Quick and convenient sessions",
      "Targets key stress areas: neck, shoulders, back",
      "Perfect for corporate events and offices",
      "Available for home and workplace visits",
    ],
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop",
    durations: [
      {
        duration: { label: "10-Minute", minutes: 10, individualPrice: 15 },
        packages: [
          {
            id: "chair-10m-5pack",
            quantity: 5,
            sessionsIncluded: 5,
            totalPrice: 67.5,
            perSessionPrice: 13.5,
            discountDescription: "Buy 5, save 10%",
            discountPercent: 10,
          },
          {
            id: "chair-10m-10pack",
            quantity: 10,
            sessionsIncluded: 10,
            totalPrice: 127.5,
            perSessionPrice: 12.75,
            discountDescription: "Buy 10, save 15%",
            discountPercent: 15,
          },
          {
            id: "chair-10m-20pack",
            quantity: 20,
            sessionsIncluded: 24,
            totalPrice: 240,
            perSessionPrice: 10,
            discountDescription: "Buy 20, save 20% (4 free)",
            discountPercent: 20,
          },
        ],
      },
      {
        duration: { label: "20-Minute", minutes: 20, individualPrice: 25 },
        packages: [
          {
            id: "chair-20m-5pack",
            quantity: 5,
            sessionsIncluded: 5,
            totalPrice: 112.5,
            perSessionPrice: 22.5,
            discountDescription: "Buy 5, save 10%",
            discountPercent: 10,
          },
          {
            id: "chair-20m-10pack",
            quantity: 10,
            sessionsIncluded: 10,
            totalPrice: 212.5,
            perSessionPrice: 21.25,
            discountDescription: "Buy 10, save 15%",
            discountPercent: 15,
          },
          {
            id: "chair-20m-20pack",
            quantity: 20,
            sessionsIncluded: 24,
            totalPrice: 400,
            perSessionPrice: 16.67,
            discountDescription: "Buy 20, save 20% (4 free)",
            discountPercent: 20,
          },
        ],
      },
      {
        duration: { label: "Half-Hour", minutes: 30, individualPrice: 35 },
        packages: [
          {
            id: "chair-30m-5pack",
            quantity: 5,
            sessionsIncluded: 5,
            totalPrice: 157.5,
            perSessionPrice: 31.5,
            discountDescription: "Buy 5, save 10%",
            discountPercent: 10,
          },
          {
            id: "chair-30m-10pack",
            quantity: 10,
            sessionsIncluded: 10,
            totalPrice: 297.5,
            perSessionPrice: 29.75,
            discountDescription: "Buy 10, save 15%",
            discountPercent: 15,
          },
          {
            id: "chair-30m-20pack",
            quantity: 20,
            sessionsIncluded: 24,
            totalPrice: 560,
            perSessionPrice: 23.33,
            discountDescription: "Buy 20, save 20% (4 free)",
            discountPercent: 20,
          },
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getPackageById(
  id: string
): { service: Service; serviceDuration: ServiceDuration; pkg: Package } | undefined {
  for (const service of services) {
    for (const sd of service.durations) {
      const pkg = sd.packages.find((p) => p.id === id);
      if (pkg) return { service, serviceDuration: sd, pkg };
    }
  }
  return undefined;
}
