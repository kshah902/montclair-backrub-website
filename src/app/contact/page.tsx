import { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/contact/ContactForm";
import { business } from "@/data/business";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Montclair Backrub, Massage & Bodyrub. Call us or send a message to schedule your appointment.",
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
            subtitle="We'd love to hear from you"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Contact Info */}
          <AnimatedSection>
            <div className="space-y-6">
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Phone
                    </h3>
                    <div className="mt-2 space-y-1">
                      {business.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\D/g, "")}`}
                          className="block text-muted transition-colors hover:text-primary"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      Email
                    </h3>
                    <a
                      href={`mailto:${business.email}`}
                      className="mt-2 block text-muted transition-colors hover:text-primary"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>
              </Card>

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
                      Call or book online to schedule
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <Card hover={false} className="h-fit">
              <h3 className="font-heading text-xl font-semibold">
                Send Us a Message
              </h3>
              <p className="mt-2 text-muted">
                Have a question or special request? Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
