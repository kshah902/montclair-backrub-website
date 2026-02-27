import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  italicWord,
  centered = true,
  className,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!italicWord) return title;
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <em className="italic">{italicWord}</em>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn(centered && "text-center", className)}>
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
