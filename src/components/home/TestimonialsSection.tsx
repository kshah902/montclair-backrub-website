import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="What Clients Say"
            italicWord="Clients"
            subtitle="Real experiences from our valued clients"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <AnimatedSection
              key={testimonial.name}
              delay={i * 150}
              className={i === 1 ? "md:translate-y-8" : ""}
            >
              <Card className="relative h-full">
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-primary/20"
                  strokeWidth={1.5}
                />
                <p className="text-muted leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-heading text-lg font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
