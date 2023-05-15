import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import { request } from "@/infra/cms/datocms";

import { LightboxNextJsImage } from "@/components/LightboxNextJsImage";
import { ScrollUpButton } from "@/components/ScrollUpButton";
import { ArrowBack } from "@/components/icons/ArrowBack";

import Link from "next/link";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

export async function getServerSideProps(context) {
  const { params, preview } = context;
  const { id } = params;

  const PROJECT_QUERY = `{
    project(filter: {id: {eq: "${id}"}}) {
      id
      name
      images {
        id
        url
        alt
        width
        height
      }
      projectType
      description
      metreage
      stepPresented
      usedSoftware
      place
      year
      needsProgram
    }
  }`;

  try {
    const projectData = await request({
      query: PROJECT_QUERY,
      preview: preview,
    });

    if (projectData.project === null) {
      return {
        notFound: true,
      };
    }

    return {
      props: { projectData },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function Project({ projectData }) {
  const [indexImageOpened, setIndexImageOpened] = useState(-1);

  const firstProjectImage =
    projectData?.project?.images[0]?.url !== undefined
      ? projectData?.project?.images[0]?.url
      : "";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#F4F4F4" />

        {/* Title */}
        <title>Studio Amanda Borges | {projectData?.project?.name}</title>
        <meta
          name="title"
          content={`Studio Amanda Borges | ${projectData?.project?.name}`}
        />
        <meta
          property="twitter:title"
          content={`Studio Amanda Borges | ${projectData?.project?.name}`}
        />

        {/* Description */}
        <meta
          name="description"
          content={`${projectData?.project?.description}`}
        />
        <meta
          property="og:description"
          content={`${projectData?.project?.description}`}
        />
        <meta
          property="twitter:description"
          content={`${projectData?.project?.description}`}
        />

        {/* URL */}
        <meta
          property="og:url"
          content={`https://studioamandaborges.vercel.app/projeto/${projectData?.project?.id}`}
        />
        <meta
          property="twitter:url"
          content={`https://studioamandaborges.vercel.app/projeto/${projectData?.project?.id}`}
        />

        {/* Image */}
        <meta
          property="twitter:image"
          content={`https://studioamandaborges.vercel.app/api/og?projectName=${projectData?.project?.name}&projectYear=${projectData?.project?.year}&projectImage=${firstProjectImage}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          itemProp="image"
          content={`https://studioamandaborges.vercel.app/api/og?projectName=${projectData?.project?.name}&projectYear=${projectData?.project?.year}&projectImage=${firstProjectImage}`}
        />
        <meta property="og:image:width" content="526" />
        <meta property="og:image:height" content="275" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-white-white2">
        <header>
          <div className="container mx-auto h-[120px] px-6 flex justify-start items-center">
            <Link
              href="/"
              scroll={false}
              className="p-[2px] text-black"
              aria-label="Navegar para a página Home"
            >
              <ArrowBack className="w-11 h-auto" />
            </Link>
          </div>
        </header>

        <main className="container mx-auto" aria-label="main-project">
          <h1 className="text-black text-4xl font-bold px-6 break-words">
            {projectData?.project?.name}
          </h1>

          <div className="xl:flex xl:items-start xl:px-6 xl:py-8 xl:space-x-reverse xl:space-x-[55px]">
            <section className="p-6 space-y-5 xl:order-2 xl:p-0 xl:space-y-5 xl:w-1/2">
              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Tipo
                </h2>

                <p className="text-base text-black xl:w-full">
                  {projectData?.project?.projectType}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Descrição
                </h2>

                <p className="text-base text-black xl:w-full whitespace-pre-line sm:whitespace-normal">
                  {projectData?.project?.description}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Metragem
                </h2>

                <p className="text-base text-black xl:w-full">
                  {projectData?.project?.metreage.toString().replace(".", ",") +
                    " m²"}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Etapa apresentada
                </h2>

                <p className="xl:w-full space-x-5">
                  {projectData?.project?.stepPresented?.map((stepPresented) => (
                    <span
                      key={stepPresented}
                      className="inline-block text-base text-black"
                    >
                      {stepPresented}
                    </span>
                  ))}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Softwares usados
                </h2>

                <p className="xl:w-full space-x-5">
                  {projectData?.project?.usedSoftware?.map((software) => (
                    <span
                      key={software}
                      className="inline-block text-base text-black"
                    >
                      {software}
                    </span>
                  ))}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Local
                </h2>

                <p className="text-base text-black xl:w-full">
                  {projectData?.project?.place}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">Ano</h2>

                <p className="text-base text-black xl:w-full">
                  {projectData?.project?.year}
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Programa de Necessidades
                </h2>

                <p className="text-base text-black xl:w-full">
                  {projectData?.project?.needsProgram}
                </p>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center space-y-8 px-6 pb-6 sm:grid sm:space-y-0 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-2 xl:order-1 xl:p-0 xl:w-1/2">
              {projectData?.project?.images?.map((projectImage, index) => (
                <Image
                  key={projectImage?.id}
                  src={projectImage?.url}
                  alt={projectImage?.alt}
                  width={348}
                  height={348}
                  placeholder="blur"
                  blurDataURL={projectImage?.url}
                  className="rounded-[5px] aspect-square object-cover object-center cursor-pointer"
                  onClick={() => setIndexImageOpened(index)}
                  tabIndex={index}
                />
              ))}
            </section>
          </div>
        </main>

        <Lightbox
          open={indexImageOpened >= 0}
          index={indexImageOpened}
          close={() => setIndexImageOpened(-1)}
          plugins={[Zoom, Thumbnails]}
          zoom={{ scrollToZoom: true }}
          slides={projectData?.project?.images?.map((projectImage) => ({
            key: projectImage?.id,
            src: projectImage?.url,
            alt: projectImage?.alt,
            width: projectImage?.width,
            height: projectImage?.height,
          }))}
          render={{ slide: LightboxNextJsImage }}
        />
      </div>

      <ScrollUpButton />

      {process.env.NODE_ENV !== "production" && (
        <Link href="/api/preview">Modo de preview</Link>
      )}
    </>
  );
}