/* eslint-disable react/prop-types */
import { useState } from "react";

import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox/core";

export function LightboxNextJsImage({ slide, rect }) {
  const [isLoading, setIsLoading] = useState(true);
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height)
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white-white2">
          <div className="w-8 h-8 border-4 border-pink border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Image
        fill
        alt=""
        src={slide}
        loading="eager"
        onLoad={() => setIsLoading(false)}
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
