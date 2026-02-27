import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArchImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ArchImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ArchImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[40px] rounded-t-full",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        priority={priority}
        sizes={sizes}
      />
    </div>
  );
}
