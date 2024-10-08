/* eslint-disable react/prop-types */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { request } from "@/infra/cms/datocms";

import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { ScrollUpButton } from "@/components/ScrollUpButton";

import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { GET_ABOUT_DATA } from "@/graphql/aboutQuery";
import {
  GET_ALL_CAROUSEL_PROJECTS,
  GET_ALL_PROJECTS,
} from "@/graphql/projectQueries";
import "swiper/css/bundle";

export async function getServerSideProps(context) {
  const { query, preview } = context;
  const { q: projectTypeSearchParam } = query;

  const projectTypeSearchParamCapitalFirstLetter = projectTypeSearchParam
    ?.toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());

  const filter =
    projectTypeSearchParamCapitalFirstLetter === undefined
      ? ""
      : `filter: {
      projectType: { eq: ${projectTypeSearchParamCapitalFirstLetter} }
    }`;

  const carouselData = await request({
    query: GET_ALL_CAROUSEL_PROJECTS,
    preview: preview,
  });

  const projectsData = await request({
    query: GET_ALL_PROJECTS(filter),
    preview: preview,
  });

  const aboutData = await request({
    query: GET_ABOUT_DATA,
    preview: preview,
  });

  return {
    props: { carouselData, projectsData, aboutData },
  };
}

export default function Home({ carouselData, projectsData, aboutData }) {
  const [navMenuIsOpened, setNavMenuIsOpened] = useState(false);
  const [carouselImagesProjects, setCarouselImagesProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState({
    image: {
      url: "",
      alt: "",
    },
    text: "",
  });

  const noProjectsFound = projects.length === 0;
  const noProjectImagesFoundOnCarousel = carouselImagesProjects === undefined;

  const { query } = useRouter();
  const { q: projectTypeSearchParam } = query;

  function handleNavMenuChange() {
    setNavMenuIsOpened(!navMenuIsOpened);
  }

  useEffect(() => {
    setCarouselImagesProjects(carouselData?.carousel?.images);
    setAbout({
      ...about,
      image: {
        url: aboutData?.about?.image?.url,
        alt: aboutData?.about?.image?.alt,
      },
      text: aboutData?.about?.text,
    });
  }, []);

  useEffect(() => {
    setProjects(projectsData?.allProjects);
  }, [projects, projectTypeSearchParam]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#B6939A" />

        {/* Title */}
        <title>Studio Amanda Borges - Arquitetura e Interiores</title>
        <meta
          name="title"
          content="Studio Amanda Borges - Arquitetura e Interiores"
        />
        <meta
          property="twitter:title"
          content="Studio Amanda Borges - Arquitetura e Interiores"
        />

        {/* Description */}
        <meta name="description" content={aboutData?.about?.text} />
        <meta property="og:description" content={aboutData?.about?.text} />
        <meta property="twitter:description" content={aboutData?.about?.text} />

        {/* URL */}
        <meta
          property="og:url"
          content="https://studioamandaborges.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://studioamandaborges.vercel.app"
        />

        {/* Image */}
        <meta property="twitter:image" content="/home-og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" itemProp="image" content="/home-og.png" />
        <meta property="og:image:width" content="526" />
        <meta property="og:image:height" content="275" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
      </Head>

      <Header
        navMenuIsOpened={navMenuIsOpened}
        handleNavMenuChange={handleNavMenuChange}
      />

      <main aria-label="main-home">
        <section className="bg-white-white2">
          <div className="container mx-auto">
            {noProjectImagesFoundOnCarousel ? (
              <></>
            ) : (
              <Swiper
                modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
                navigation={true}
                pagination={{ clickable: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                a11y={{
                  enabled: true,
                  prevSlideMessage: "Slide anterior",
                  nextSlideMessage: "Próximo slide",
                }}
                className="h-[500px] w-full"
              >
                {carouselImagesProjects.map((image) => (
                  <SwiperSlide key={image?.id}>
                    <Image
                      src={image?.url}
                      alt={image?.alt}
                      fill={true}
                      className="object-cover object-center"
                      quality={100}
                      placeholder="blur"
                      blurDataURL={image?.url}
                      priority={true}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section>

        <section className="bg-white-white2">
          <Projects
            projectTypeSearchParam={projectTypeSearchParam}
            noProjectsFound={noProjectsFound}
            projects={projects}
          />
        </section>

        <section className="bg-green">
          <About
            imageUrl={about?.image?.url}
            imageAltText={about?.image?.alt}
            description={about?.text}
          />
        </section>
      </main>

      <Footer />

      <ScrollUpButton />

      {process.env.NODE_ENV !== "production" && (
        <Link href="/api/preview">Modo de preview</Link>
      )}
    </>
  );
}
