import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { business } from "@/data/business";

export default function CTABanner() {
  return (
    <section className="bg-foreground py-16 md:py-24">
      <Container>
        <AnimatedSection>
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold text-white md:text-5xl">
              Ready to <em className="italic text-primary-light">relax</em>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
              Purchase a package online or give us a call to get started.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/packages" variant="secondary" size="lg">
                Purchase a Package
              </Button>
              <Button
                href={`tel:${business.phones[0].replace(/\D/g, "")}`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white hover:text-white"
              >
                Call {business.phones[0]}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
