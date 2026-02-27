"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItem } from "@/types/services";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AnimatedSection key={i} delay={i * 50}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors duration-300 hover:bg-card-alt md:p-6"
            >
              <span className="pr-4 font-heading text-lg font-semibold">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                  openIndex === i && "rotate-180"
                )}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-500 ease-out",
                openIndex === i
                  ? "max-h-48 opacity-100"
                  : "max-h-0 opacity-0"
              )}
            >
              <p className="px-5 pb-5 text-muted leading-relaxed md:px-6 md:pb-6">
                {item.answer}
              </p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
