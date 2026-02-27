import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  variant?: "default" | "alt";
}

export default function Card({
  className,
  children,
  hover = true,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border p-6 md:p-8",
        variant === "default" ? "bg-card" : "bg-card-alt",
        hover &&
          "transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-large",
        className
      )}
    >
      {children}
    </div>
  );
}
