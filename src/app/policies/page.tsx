import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business } from "@/data/business";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Policies",
  description:
    "Policies for Montclair Backrub massage services including cancellation, refund, and transfer policies.",
  path: "/policies",
});

const policies = [
  {
    title: "Package Policy",
    content: [
      "All massage packages are non-refundable once purchased.",
      "Packages are fully transferable — you may gift unused sessions to friends, family, or colleagues.",
      "Packages do not have a strict expiration date, but we encourage use within 12 months of purchase for the best experience.",
      "Gift certificates are available for all packages and make excellent gifts.",
    ],
  },
  {
    title: "Cancellation Policy",
    content: [
      "We kindly request at least 24 hours' notice for cancellations or rescheduling.",
      "Late cancellations (less than 24 hours) or no-shows may result in the session being deducted from your package or a cancellation fee.",
      "We understand emergencies happen — please call us as soon as possible and we'll do our best to accommodate you.",
    ],
  },
  {
    title: "Sales Tax",
    content: [
      `New Jersey sales tax of ${(business.salesTaxRate * 100).toFixed(3)}% applies to all purchases.`,
      "All prices listed on our website are pre-tax amounts.",
      "Tax is calculated and applied at checkout.",
    ],
  },
  {
    title: "Home & Workplace Visits",
    content: [
      `An additional surcharge of $${business.homeVisitSurcharge} per trip applies for all home and workplace visits.`,
      `This surcharge applies to locations within a ${business.homeVisitRadius} driving radius.`,
      "Please call to arrange home or workplace visits.",
      "A suitable space for the massage table or chair must be available at your location.",
    ],
  },
  {
    title: "Payment Methods",
    content: [
      "We accept PayPal for online package purchases.",
      "Credit and debit card payments are accepted over the phone.",
      "Cash is accepted for in-person sessions.",
      "Tipping is never required but always appreciated.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Policies"
            italicWord="Policies"
            subtitle="Important information about our services"
          />
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl space-y-8">
          {policies.map((policy, i) => (
            <AnimatedSection key={policy.title} delay={i * 100}>
              <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold md:text-2xl">
                  {policy.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {policy.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  );
}
