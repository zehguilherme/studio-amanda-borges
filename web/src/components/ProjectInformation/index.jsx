/* eslint-disable react/prop-types */
import Image from "next/image";

export function ProjectInformation({
  name,
  type,
  description,
  meterage,
  stepsPresented,
  usedSoftwares,
  place,
  year,
  needsProgram,
  images,
  setIndexImageOpened,
}) {
  return (
    <>
      <h1 className="break-words px-6 text-4xl font-bold text-black">{name}</h1>

      <div className="xl:flex xl:items-start xl:space-x-[55px] xl:space-x-reverse xl:px-6 xl:py-8">
        <section className="space-y-5 p-6 xl:order-2 xl:w-1/2 xl:space-y-5 xl:p-0">
          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">Tipo</h2>

            <p className="text-base text-black xl:w-full">{type}</p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">
              Descrição
            </h2>

            <p className="whitespace-pre-line text-base text-black sm:whitespace-normal xl:w-full">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">
              Metragem
            </h2>

            <p className="text-base text-black xl:w-full">
              {meterage?.toString().replace(".", ",") + " m²"}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">
              Etapa apresentada
            </h2>

            <p className="space-x-5 xl:w-full">
              {stepsPresented?.map((stepPresented) => (
                <span
                  key={stepPresented}
                  className="inline-block text-base text-black"
                >
                  {stepPresented}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">
              Softwares usados
            </h2>

            <p className="space-x-5 xl:w-full">
              {usedSoftwares?.map((software) => (
                <span
                  key={software}
                  className="inline-block text-base text-black"
                >
                  {software}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">Local</h2>

            <p className="text-base text-black xl:w-full">{place}</p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">Ano</h2>

            <p className="text-base text-black xl:w-full">{year}</p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
            <h2 className="text-3xl font-bold text-black xl:w-full">
              Programa de Necessidades
            </h2>

            <p className="text-base text-black xl:w-full">{needsProgram}</p>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center space-y-8 px-6 pb-6 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 md:grid-cols-3 xl:order-1 xl:w-1/2 xl:grid-cols-2 xl:p-0">
          {images?.map(
            (image, index) =>
              image?.id &&
              image?.url &&
              image?.alt && (
                <Image
                  key={image?.id}
                  src={image?.url}
                  alt={image?.alt}
                  width={348}
                  height={348}
                  priority={true}
                  className="aspect-square cursor-pointer rounded-[5px] object-cover object-center"
                  onClick={() => setIndexImageOpened(index)}
                  tabIndex={index}
                />
              )
          )}
        </section>
      </div>
    </>
  );
}
