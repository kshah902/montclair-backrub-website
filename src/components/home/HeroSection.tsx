import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&h=1080&fit=crop"
          alt="Relaxing massage therapy environment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl w-full">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-light">
              Montclair, New Jersey
            </p>
            <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Healing Hands,
              <br />
              <em className="italic text-primary-light">Natural</em> Touch
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80 md:text-xl">
              Experience restorative massage therapy tailored to your body&apos;s
              needs. Table massage, reflexology, and chair massage — all with
              flexible packages and savings.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/booking" size="lg">
                Book an Appointment
              </Button>
              <Button href="/services" variant="outline" size="lg" className="border-white/30 text-white hover:border-white hover:text-white">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
