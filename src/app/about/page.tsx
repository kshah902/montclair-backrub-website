import { Metadata } from "next";
import Image from "next/image";
import { Award, Clock, Heart, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Montclair Backrub, Massage & Bodyrub. Licensed massage therapists dedicated to your wellness in Montclair, NJ.",
  path: "/about",
});

const stats = [
  { icon: Clock, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Satisfied Clients", value: "5,000+" },
  { icon: Award, label: "Licensed Therapists", value: "NJ Certified" },
  { icon: Heart, label: "Sessions Delivered", value: "50,000+" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[40px] rounded-t-full">
              <Image
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&h=1000&fit=crop"
                alt="Our massage therapy studio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex h-full flex-col justify-center">
              <SectionHeading
                title="Our Story"
                italicWord="Story"
                centered={false}
              />
              <div className="mt-8 space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  Montclair Backrub, Massage &amp; Bodyrub was founded with a
                  simple mission: to provide accessible, high-quality massage
                  therapy that helps people feel their best.
                </p>
                <p>
                  Located in the heart of Montclair, New Jersey, our practice
                  has grown over the years through word-of-mouth referrals and
                  a genuine commitment to each client&apos;s wellness journey.
                </p>
                <p>
                  We believe that regular massage therapy isn&apos;t a luxury —
                  it&apos;s an essential part of a healthy lifestyle. That&apos;s
                  why we offer flexible packages that make professional massage
                  more affordable and accessible.
                </p>
                <p>
                  Whether you visit us for a quick chair massage, a restorative
                  table session, or therapeutic reflexology, you&apos;ll
                  experience the care and expertise that has made us Montclair&apos;s
                  trusted choice for massage therapy.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/packages" size="lg">
                  View Packages
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection>
          <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-border bg-card p-8 md:mt-32 md:grid-cols-4 md:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="mt-4 font-heading text-2xl font-bold md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values */}
        <div className="mt-16 md:mt-32">
          <AnimatedSection>
            <SectionHeading
              title="Our Approach"
              italicWord="Approach"
              subtitle="Every session is guided by our core values"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Personalized Care",
                description:
                  "No two bodies are the same. We listen to your needs and customize every session to address your specific concerns and comfort level.",
              },
              {
                title: "Affordable Wellness",
                description:
                  "Massage therapy should be accessible to everyone. Our package deals offer savings up to 33%, making regular sessions more affordable.",
              },
              {
                title: "Convenience First",
                description:
                  "From flexible scheduling to home and workplace visits, we make it easy to fit wellness into your busy life.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 150}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <h3 className="font-heading text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
