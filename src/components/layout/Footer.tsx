import Link from "next/link";
import { Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { business, NAV_LINKS } from "@/data/business";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card-alt py-16 md:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-semibold tracking-tight"
            >
              Montclair <em className="italic text-primary">Backrub</em>
            </Link>
            <p className="mt-4 max-w-xs text-muted">
              Professional massage therapy in the heart of Montclair, NJ.
              Healing hands for a healthier, more relaxed you.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/faq"
                className="text-muted transition-colors duration-300 hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="/policies"
                className="text-muted transition-colors duration-300 hover:text-primary"
              >
                Policies
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Get in Touch</h3>
            <div className="mt-4 flex flex-col gap-3">
              {business.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors duration-300 hover:text-primary"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  {phone}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Home &amp; workplace visits available within{" "}
              {business.homeVisitRadius} for an additional $
              {business.homeVisitSurcharge}.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted">
            All packages are non-refundable but transferable. NJ sales tax
            applies to all purchases.
          </p>
          <p className="mt-2 text-sm text-muted">
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
