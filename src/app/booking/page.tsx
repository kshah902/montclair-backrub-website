import { Metadata } from "next";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CalEmbed from "@/components/booking/CalEmbed";
import { business } from "@/data/business";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Book an Appointment",
  description:
    "Book your massage therapy appointment online. Choose from table massage, reflexology, or chair massage sessions at Montclair Backrub.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Book Your Session"
            italicWord="Session"
            subtitle="Choose a time that works for you and we'll take care of the rest"
          />
        </AnimatedSection>

        {/* Calendar Embed */}
        <AnimatedSection delay={200}>
          <div className="mt-12">
            <CalEmbed />
          </div>
        </AnimatedSection>

        {/* Phone Fallback */}
        <AnimatedSection delay={300}>
          <div className="mt-12 rounded-3xl border border-border bg-card-alt p-8 text-center">
            <h3 className="font-heading text-xl font-semibold">
              Prefer to book by phone?
            </h3>
            <p className="mt-2 text-muted">
              Give us a call and we&apos;ll be happy to help you schedule your
              appointment.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {business.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  );
}
