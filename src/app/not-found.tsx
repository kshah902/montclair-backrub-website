import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-24">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            404
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold md:text-6xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" size="lg">
              Go Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
