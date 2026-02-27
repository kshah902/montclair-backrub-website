import { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { business } from "@/data/business";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Montclair Backrub, Massage & Bodyrub. Call us to schedule your appointment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Get in Touch"
            italicWord="Touch"
            subtitle="Give us a call to schedule your appointment"
          />
        </AnimatedSection>

        <div className="mx-auto mt-16 max-w-2xl">
          <AnimatedSection>
            <div className="space-y-6">
              {/* Phone - Primary CTA */}
              <Card hover={false} className="border-primary/20 bg-primary/5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold">
                      Call Us
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      The best way to reach us and schedule your appointment
                    </p>
                    <div className="mt-4">
                      {business.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\D/g, "")}`}
                          className="block text-xl font-semibold text-primary transition-colors hover:text-interactive"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button
                        href={`tel:${business.phones[0].replace(/\D/g, "")}`}
                        size="lg"
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Location
                    </h3>
                    <p className="mt-2 text-muted">Montclair, New Jersey</p>
                    <p className="mt-1 text-sm text-muted">
                      Home &amp; workplace visits available within{" "}
                      {business.homeVisitRadius} for +$
                      {business.homeVisitSurcharge}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Hours
                    </h3>
                    <p className="mt-2 text-muted">By appointment only</p>
                    <p className="mt-1 text-sm text-muted">
                      Call to schedule your session
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
