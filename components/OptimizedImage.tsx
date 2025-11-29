import Image from "next/image";
import React from "react";

type Props = {
  src?: string | null;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
};

export default function OptimizedImage({ src, alt = "", className = "", width, height, fill = false, sizes }: Props) {
  const fallback = "/images/project-placeholder.svg";
  const resolved = src || fallback;

  // next/image supports local and remote images if allowed in next.config
  if (fill) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image src={resolved} alt={alt} fill className="object-cover" sizes={sizes} onError={() => { /* noop - next/image will show fallback if configured */ }} />
      </div>
    );
  }

  // width/height fallback
  const w = width || 600;
  const h = height || 360;

  return <Image src={resolved} alt={alt} width={w} height={h} className={className} sizes={sizes} />;
}
