import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PackageTable from "@/components/services/PackageTable";
import { getServiceBySlug } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

const service = getServiceBySlug("reiki");

export const metadata: Metadata = createMetadata({
  title: "Reiki",
  description:
    "Reiki energy healing in Montclair, NJ. Japanese healing technique for relaxation and stress reduction. Sessions from 30 minutes to 2 hours. Can be combined with table massage.",
  path: "/services/reiki",
});

export default function ReikiPage() {
  if (!service) return notFound();

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] rounded-t-full lg:aspect-auto lg:h-full">
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="lg:order-1">
            <div className="flex h-full flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Energy Healing
                </span>
              </div>
              <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                {service.longDescription}
              </p>
              <ul className="mt-8 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" strokeWidth={2} />
                    </div>
                    <span className="text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/booking" size="lg">
                  Book a Session
                </Button>
                <Button href="#packages" variant="outline" size="lg">
                  View Packages
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Packages */}
        <div id="packages" className="mt-16 scroll-mt-24 md:mt-32">
          <AnimatedSection>
            <h2 className="text-center font-heading text-3xl font-semibold md:text-4xl">
              Pricing &amp; <em className="italic">Packages</em>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-muted">
              Save more with multi-session packages. All packages are
              transferable — perfect for gift-giving.
            </p>
          </AnimatedSection>
          <div className="mt-12">
            <PackageTable
              durations={service.durations}
              serviceName={service.name}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
