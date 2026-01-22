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
        width={1200}
        height={630}
        className="w-full h-auto object-cover"
        priority={priority}
      />
    </div>
  );
}
