import { Award, Home, Percent, Heart } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Award,
    title: "Licensed Therapists",
    description:
      "All our massage therapists are fully licensed and certified in the state of New Jersey with ongoing education.",
  },
  {
    icon: Home,
    title: "Home Visits Available",
    description:
      "Enjoy the comfort of a professional massage in your own home or office within a 15-minute radius.",
  },
  {
    icon: Percent,
    title: "Package Savings",
    description:
      "Save up to 33% with our multi-session packages. The more you book, the more you save.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every session is customized to your specific needs, preferences, and comfort level.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-card-alt py-16 md:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Why Choose Us"
            italicWord="Choose"
            subtitle="We're committed to your wellness journey"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon
                    className="h-7 w-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-3 text-muted">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
