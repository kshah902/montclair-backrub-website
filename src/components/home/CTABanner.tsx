import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
              Book your appointment today and experience the difference
              professional massage therapy can make.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/booking" variant="secondary" size="lg">
                Book an Appointment
              </Button>
              <Button
                href="/packages"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white hover:text-white"
              >
                View Packages
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
