import Image from "next/image";

interface CoverImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function CoverImage({ src, alt, priority = false }: CoverImageProps) {
  return (
    <div className="relative w-full border border-border overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(min-width: 1400px) 1320px, 100vw"
        className="w-full h-auto"
        priority={priority}
      />
    </div>
  );
}
