/* eslint-disable react/prop-types */
import Image from "next/image";

export function About({ imageUrl, imageAltText, description }) {
  return (
    <div className="container mx-auto space-y-6 p-6 lg:py-5">
      <h2 className="text-3xl font-bold text-white-white1" id="sobre">
        Sobre
      </h2>

      <div className="flex flex-col items-center space-y-8 py-5 lg:flex-row lg:items-start lg:justify-center lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
        {imageUrl && imageAltText && (
          <Image
            src={imageUrl}
            alt={imageAltText}
            width={312}
            height={392}
            className="rounded-[5px]"
            name="profile"
            priority={false}
            placeholder="blur"
            blurDataURL={imageUrl}
          />
        )}

        <p
          className="max-w-[395px] whitespace-pre-wrap text-base text-white-white1"
          name="description"
        >
          {description}
        </p>
      </div>
    </div>
  );
}
