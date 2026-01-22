import Image from "next/image";

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function MDXImage({ src, alt, width = 800, height = 450 }: MDXImageProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </div>
      {alt && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
