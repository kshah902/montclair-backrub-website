"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ServiceDuration } from "@/types/services";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PackageTableProps {
  durations: ServiceDuration[];
  serviceName: string;
}

export default function PackageTable({
  durations,
  serviceName,
}: PackageTableProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {durations.map((sd, i) => (
        <AnimatedSection key={sd.duration.label} delay={i * 100}>
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            {/* Duration Header */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-card-alt md:p-8"
            >
              <div>
                <h3 className="font-heading text-xl font-semibold md:text-2xl">
                  {sd.duration.label} {serviceName}
                </h3>
                <p className="mt-1 text-primary">
                  {formatCurrency(sd.duration.individualPrice)} per session
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-muted transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )}
                strokeWidth={1.5}
              />
            </button>

            {/* Packages */}
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                openIndex === i ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="border-t border-border px-6 py-6 md:px-8">
                {/* Individual Session */}
                <div className="mb-4 flex items-center justify-between rounded-2xl bg-card-alt p-4">
                  <div>
                    <p className="font-semibold">Single Session</p>
                    <p className="text-sm text-muted">No commitment needed</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-xl font-semibold">
                      {formatCurrency(sd.duration.individualPrice)}
                    </p>
                  </div>
                </div>

                {/* Package Options */}
                <div className="space-y-3">
                  {sd.packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="flex flex-col gap-4 rounded-2xl border border-border p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-soft sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">
                            {pkg.discountDescription}
                          </p>
                          <span className="rounded-full bg-interactive/10 px-2.5 py-0.5 text-xs font-semibold text-interactive">
                            Save {Math.round(pkg.discountPercent)}%
                          </span>
                        </div>
                        <p className="text-sm text-muted">
                          {pkg.sessionsIncluded} sessions &middot;{" "}
                          {formatCurrency(pkg.perSessionPrice)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-heading text-xl font-semibold">
                          {formatCurrency(pkg.totalPrice)}
                        </p>
                        <Button
                          href={`/packages?package=${pkg.id}`}
                          size="sm"
                          variant="secondary"
                        >
                          Purchase
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
