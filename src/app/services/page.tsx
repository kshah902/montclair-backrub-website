import { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore our massage therapy services: Table Massage, Reflexology, and Chair Massage. Flexible sessions from 10 minutes to 2 hours with package savings.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Services"
            italicWord="Services"
            subtitle="Choose the therapy that's right for you"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-12">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.slug}
              delay={i * 150}
              className={i === 1 ? "md:translate-y-8" : ""}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

        {/* Home Visit Note */}
        <AnimatedSection>
          <div className="mt-16 rounded-3xl border border-border bg-card-alt p-8 text-center md:p-12">
            <h3 className="font-heading text-2xl font-semibold">
              Home &amp; Workplace Visits
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Enjoy the convenience of professional massage therapy at your
              location. We offer home and workplace visits for an additional $60
              per trip within a 15-minute radius.
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
