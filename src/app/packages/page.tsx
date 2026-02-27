"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PayPalCheckout from "@/components/checkout/PayPalCheckout";
import { services, getPackageById } from "@/data/services";
import { business } from "@/data/business";
import { formatCurrency, calculateTax, calculateTotal } from "@/lib/utils";
import { cn } from "@/lib/utils";

function PackagesContent() {
  const searchParams = useSearchParams();
  const preselectedPackageId = searchParams.get("package");

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Pre-fill from URL
  useEffect(() => {
    if (preselectedPackageId) {
      const result = getPackageById(preselectedPackageId);
      if (result) {
        const sIdx = services.findIndex((s) => s.slug === result.service.slug);
        const dIdx = result.service.durations.findIndex(
          (d) => d.duration.label === result.serviceDuration.duration.label
        );
        if (sIdx >= 0) setSelectedServiceIndex(sIdx);
        if (dIdx >= 0) setSelectedDurationIndex(dIdx);
        setSelectedPackageId(preselectedPackageId);
      }
    }
  }, [preselectedPackageId]);

  const selectedService = services[selectedServiceIndex];
  const selectedDuration = selectedService.durations[selectedDurationIndex];
  const selectedPackage = selectedPackageId
    ? selectedDuration.packages.find((p) => p.id === selectedPackageId)
    : null;

  if (orderComplete) {
    return (
      <div className="pt-24 pb-16 md:pt-32 md:pb-32">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <AnimatedSection>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <h1 className="mt-6 font-heading text-4xl font-bold">
                Thank You!
              </h1>
              <p className="mt-4 text-lg text-muted">
                Your purchase is complete. Order ID:{" "}
                <span className="font-semibold text-foreground">{orderId}</span>
              </p>
              <p className="mt-2 text-muted">
                Call us at {business.phones[0]} to schedule your sessions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button href={`tel:${business.phones[0].replace(/\D/g, "")}`} size="lg">
                  Call to Schedule
                </Button>
                <Button href="/" variant="outline" size="lg">
                  Back to Home
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Purchase a Package"
            italicWord="Package"
            subtitle="Save more when you buy multiple sessions"
          />
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* Step 1: Select Service */}
          <AnimatedSection delay={100}>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold">
                1. Choose a Service
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {services.map((service, i) => (
                  <button
                    key={service.slug}
                    onClick={() => {
                      setSelectedServiceIndex(i);
                      setSelectedDurationIndex(0);
                      setSelectedPackageId(null);
                    }}
                    className={cn(
                      "rounded-2xl border p-4 text-left transition-all duration-300",
                      selectedServiceIndex === i
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <p className="font-semibold">{service.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      From {formatCurrency(service.durations[0].duration.individualPrice)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Step 2: Select Duration */}
          <AnimatedSection delay={200}>
            <div className="mt-4 rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold">
                2. Choose a Duration
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {selectedService.durations.map((sd, i) => (
                  <button
                    key={sd.duration.label}
                    onClick={() => {
                      setSelectedDurationIndex(i);
                      setSelectedPackageId(null);
                    }}
                    className={cn(
                      "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                      selectedDurationIndex === i
                        ? "border-primary bg-primary text-white"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    {sd.duration.label} —{" "}
                    {formatCurrency(sd.duration.individualPrice)}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Step 3: Select Package */}
          <AnimatedSection delay={300}>
            <div className="mt-4 rounded-3xl border border-border bg-card p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold">
                3. Choose a Package
              </h3>
              <div className="mt-4 space-y-3">
                {selectedDuration.packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300",
                      selectedPackageId === pkg.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{pkg.discountDescription}</p>
                        <span className="rounded-full bg-interactive/10 px-2 py-0.5 text-xs font-semibold text-interactive">
                          Save {Math.round(pkg.discountPercent)}%
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted">
                        {pkg.sessionsIncluded} sessions &middot;{" "}
                        {formatCurrency(pkg.perSessionPrice)} each
                      </p>
                    </div>
                    <p className="font-heading text-xl font-semibold">
                      {formatCurrency(pkg.totalPrice)}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Order Summary & Checkout */}
          {selectedPackage && (
            <AnimatedSection delay={400}>
              <div className="mt-4 rounded-3xl border border-border bg-card p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold">
                  Order Summary
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted">
                      {selectedService.name} — {selectedDuration.duration.label}
                    </span>
                    <span>{formatCurrency(selectedPackage.totalPrice)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">
                      {selectedPackage.discountDescription}
                    </span>
                    <span className="text-sm text-primary">
                      {selectedPackage.sessionsIncluded} sessions
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="text-muted">
                      NJ Sales Tax ({(business.salesTaxRate * 100).toFixed(3)}%)
                    </span>
                    <span>
                      {formatCurrency(
                        calculateTax(selectedPackage.totalPrice, business.salesTaxRate)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-3">
                    <span className="font-heading text-lg font-semibold">
                      Total
                    </span>
                    <span className="font-heading text-lg font-semibold">
                      {formatCurrency(
                        calculateTotal(selectedPackage.totalPrice, business.salesTaxRate)
                      )}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <PayPalCheckout
                    packageId={selectedPackage.id}
                    onSuccess={(id) => {
                      setOrderId(id);
                      setOrderComplete(true);
                    }}
                    onError={(err) => {
                      console.error("PayPal error:", err);
                      setError(
                        "There was an issue processing your payment. Please try again or call us."
                      );
                    }}
                  />
                </div>

                {error && (
                  <p className="mt-4 text-center text-sm text-interactive">
                    {error}
                  </p>
                )}

                {/* Phone fallback */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted">
                    Prefer to pay over the phone?
                  </p>
                  <div className="mt-2 flex flex-wrap justify-center gap-3">
                    {business.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-interactive"
                      >
                        <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </Container>
    </div>
  );
}

export default function PackagesPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center pt-24">
        <div className="text-muted">Loading...</div>
      </div>
    }>
      <PackagesContent />
    </Suspense>
  );
}
