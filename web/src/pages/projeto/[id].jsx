/* eslint-disable react/prop-types */
import Head from "next/head";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";

import { request } from "@/infra/cms/datocms";

import { LightboxNextJsImage } from "@/components/LightboxNextJsImage";
import { ScrollUpButton } from "@/components/ScrollUpButton";

import { HeaderProject } from "@/components/HeaderProject";
import { ProjectInformation } from "@/components/ProjectInformation";
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

  useEffect(() => {
    setProject(projectData?.project);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#F4F4F4" />

        {/* Title */}
        <title>{`Studio Amanda Borges - ${projectData?.project?.name}`}</title>
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
      </Head>

      <div className="bg-white-white2">
        <HeaderProject />

        <main className="container mx-auto" aria-label="main-project">
          <ProjectInformation
            name={project?.name}
            description={project?.description}
            type={project?.projectType}
            meterage={project?.metreage}
            stepsPresented={project?.stepPresented}
            usedSoftwares={project?.usedSoftware}
            place={project?.place}
            year={project?.year}
            needsProgram={project?.needsProgram}
            images={project?.images}
            setIndexImageOpened={setIndexImageOpened}
          />
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
