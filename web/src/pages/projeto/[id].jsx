/* eslint-disable react/prop-types */
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
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

  const PROJECT_QUERY = `query {
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
  const [project, setProject] = useState({
    id: "",
    name: "",
    images: [
      {
        id: "",
        url: "",
        alt: "",
        width: 0,
        height: 0,
      },
    ],
    projectType: "",
    description: "",
    metreage: 0,
    stepPresented: [""],
    usedSoftware: [""],
    place: "",
    year: 0,
    needsProgram: "",
  });

  const firstProjectImage =
    projectData?.project?.images[0]?.url !== undefined
      ? projectData?.project?.images[0]?.url
      : "";

  useEffect(() => {
    setProject(projectData?.project);
  }, []);

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
          <div className="container mx-auto flex h-[120px] items-center justify-start px-6">
            <Link
              href="/"
              scroll={false}
              className="p-[2px] text-black"
              aria-label="Navegar para a página Home"
            >
              <ArrowBack className="h-auto w-11" />
            </Link>
          </div>
        </header>

        <main className="container mx-auto" aria-label="main-project">
          <h1 className="break-words px-6 text-4xl font-bold text-black">
            {project?.name}
          </h1>

          <div className="xl:flex xl:items-start xl:space-x-[55px] xl:space-x-reverse xl:px-6 xl:py-8">
            <section className="space-y-5 p-6 xl:order-2 xl:w-1/2 xl:space-y-5 xl:p-0">
              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Tipo
                </h2>

                <p className="text-base text-black xl:w-full">
                  {project?.projectType}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Descrição
                </h2>

                <p className="whitespace-pre-line text-base text-black sm:whitespace-normal xl:w-full">
                  {project?.description}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Metragem
                </h2>

                <p className="text-base text-black xl:w-full">
                  {project?.metreage?.toString().replace(".", ",") + " m²"}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Etapa apresentada
                </h2>

                <p className="space-x-5 xl:w-full">
                  {project?.stepPresented?.map((stepPresented) => (
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
                  {project.usedSoftware?.map((software) => (
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
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Local
                </h2>

                <p className="text-base text-black xl:w-full">
                  {project?.place}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">Ano</h2>

                <p className="text-base text-black xl:w-full">
                  {project?.year}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center space-y-3 xl:flex-row xl:justify-start xl:space-x-7 xl:space-y-0">
                <h2 className="text-3xl font-bold text-black xl:w-full">
                  Programa de Necessidades
                </h2>

                <p className="text-base text-black xl:w-full">
                  {project?.needsProgram}
                </p>
              </div>
            </section>

            <section className="flex flex-col items-center justify-center space-y-8 px-6 pb-6 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0 md:grid-cols-3 xl:order-1 xl:w-1/2 xl:grid-cols-2 xl:p-0">
              {project?.images?.map(
                (projectImage, index) =>
                  projectImage &&
                  index && (
                    <Image
                      key={projectImage?.id}
                      src={projectImage?.url}
                      alt={projectImage?.alt}
                      width={348}
                      height={348}
                      className="aspect-square cursor-pointer rounded-[5px] object-cover object-center"
                      onClick={() => setIndexImageOpened(index)}
                      tabIndex={index}
                    />
                  )
              )}
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
