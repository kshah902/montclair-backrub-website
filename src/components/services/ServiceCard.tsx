import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import ArchImage from "@/components/ui/ArchImage";
import { Service } from "@/types/services";
import { formatCurrency } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <Card className="overflow-hidden p-0">
        <div className="relative">
          <ArchImage
            src={service.image}
            alt={service.name}
            className="aspect-[4/3]"
          />
        </div>
        <div className="p-6 md:p-8">
          <h3 className="font-heading text-2xl font-semibold transition-colors duration-300 group-hover:text-primary">
            {service.name}
          </h3>
          <p className="mt-2 text-muted">{service.shortDescription}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-primary">
              Starting at{" "}
              {formatCurrency(service.durations[0].duration.individualPrice)}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-widest text-interactive transition-all duration-300 group-hover:gap-2">
              Details
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
