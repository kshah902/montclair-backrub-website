import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ArchImage from "@/components/ui/ArchImage";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/data/services";
import { formatCurrency } from "@/lib/utils";

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Our Services"
            italicWord="Services"
            subtitle="Four distinct approaches to wellness, each tailored to your needs"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.slug}
              delay={i * 150}
              className={i % 2 === 1 ? "md:translate-y-12" : ""}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block"
              >
                <ArchImage
                  src={service.image}
                  alt={service.name}
                  className="aspect-[3/4]"
                />
                <div className="mt-6">
                  <h3 className="font-heading text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-muted">
                    {service.shortDescription}
                  </p>
                  <p className="mt-3 text-sm text-primary">
                    Starting at{" "}
                    {formatCurrency(service.durations[0].duration.individualPrice)}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-interactive transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
