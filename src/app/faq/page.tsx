import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/shared/FAQAccordion";
import JsonLd from "@/components/shared/JsonLd";
import Button from "@/components/ui/Button";
import { faqItems } from "@/data/faq";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Montclair Backrub massage services, packages, policies, and booking.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <JsonLd data={faqJsonLd} />
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Frequently Asked Questions"
            italicWord="Questions"
            subtitle="Everything you need to know about our services"
          />
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>

        <AnimatedSection>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted">
              Still have questions? We&apos;re here to help.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Contact Us</Button>
              <Button href="/booking" variant="outline">
                Book a Session
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
