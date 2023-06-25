/* eslint-disable react/prop-types */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { request } from "@/infra/cms/datocms";

import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollUpButton } from "@/components/ScrollUpButton";
import { Email } from "@/components/icons/Email";
import { Instagram } from "@/components/icons/Instagram";
import { Logo } from "@/components/icons/Logo";
import { WhatsApp } from "@/components/icons/WhatsApp";

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
      : `, filter: {
      projectType: { eq: ${projectTypeSearchParamCapitalFirstLetter} }
    }`;

  const CAROUSEL_QUERY = `query {
    carousel {
      images {
        id,
        url,
        alt
      }
    }
  }`;

  const PROJECTS_QUERY = `query {
    allProjects(orderBy: year_DESC ${filter}) {
      id,
      name,
      year,
      images {
        url,
        alt
      }
    }
  }`;

  const ABOUT_QUERY = `query {
    about {
      image {
        url,
        alt
      },
      text
    }
  }`;

  const carouselData = await request({
    query: CAROUSEL_QUERY,
    preview: preview,
  });

  const projectsData = await request({
    query: PROJECTS_QUERY,
    preview: preview,
  });

  const aboutData = await request({
    query: ABOUT_QUERY,
    preview: preview,
  });

  return {
    props: { carouselData, projectsData, aboutData },
  };
}

export default function Home({ carouselData, projectsData, aboutData }) {
  const [navMenuIsOpened, setNavMenuIsOpened] = useState(false);
  const noProjectsFound = Object.keys(projectsData?.allProjects).length === 0;

  const { query } = useRouter();
  const { q: projectTypeSearchParam } = query;

  function handleNavMenuChange() {
    setNavMenuIsOpened(!navMenuIsOpened);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#B6939A" />

        {/* Title */}
        <title>Studio Amanda Borges</title>
        <meta name="title" content="Studio Amanda Borges" />
        <meta property="twitter:title" content="Studio Amanda Borges" />

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
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
              centeredSlides={true}
              autoHeight={true}
              setWrapperSize={true}
              roundLengths={true}
              navigation={true}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true, onlyInViewport: true }}
              a11y={{
                enabled: true,
                prevSlideMessage: "Slide anterior",
                nextSlideMessage: "Próximo slide",
              }}
              loop={true}
              autoplay={{ disableOnInteraction: false }}
            >
              {carouselData?.carousel?.images?.map((image) => (
                <SwiperSlide key={image?.id}>
                  <Image
                    src={image?.url}
                    alt={image?.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={image?.url}
                    className="h-[500px] w-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="bg-white-white2">
          <div className="container mx-auto space-y-6 p-6 lg:space-y-5 lg:py-8">
            <h2 className="text-3xl font-bold" id="projetos">
              Projetos
            </h2>

            <ul className="justify-center lg:flex">
              <li>
                <Link
                  href="/"
                  scroll={false}
                  className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === undefined
                      ? "font-bold"
                      : "hover:text-black/50"
                  }`}
                >
                  Todos
                </Link>
              </li>
              <li>
                <Link
                  href={`/?q=${encodeURIComponent("residencial")}`}
                  scroll={false}
                  className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "residencial"
                      ? "font-bold"
                      : "hover:text-black/50"
                  }`}
                >
                  Residencial
                </Link>
              </li>
              <li>
                <Link
                  href={`/?q=${encodeURIComponent("comercial")}`}
                  scroll={false}
                  className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "comercial"
                      ? "font-bold"
                      : "hover:text-black/50"
                  }`}
                >
                  Comercial
                </Link>
              </li>
              <li>
                <Link
                  href={`/?q=${encodeURIComponent("interiores")}`}
                  scroll={false}
                  className={`flex h-12 items-center justify-center text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "interiores"
                      ? "font-bold"
                      : "hover:text-black/50"
                  }`}
                >
                  Interiores
                </Link>
              </li>
            </ul>

            <div
              className={`flex flex-col items-center justify-center space-y-7 sm:space-y-0 ${
                noProjectsFound
                  ? ""
                  : "sm:grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {noProjectsFound ? (
                <div className="flex h-full w-full flex-col items-center space-y-10">
                  <h3 className="text-center text-xl font-bold text-black">
                    Nenhum projeto encontrado nessa categoria!
                  </h3>
                </div>
              ) : (
                projectsData?.allProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    projectUrl={`projeto/${encodeURIComponent(project?.id)}`}
                    imgUrl={project?.images[0]?.url}
                    imgAlt={project?.images[0]?.alt}
                    projectTitle={project?.name}
                    projectYear={project?.year}
                  />
                ))
              )}
            </div>
          </div>
        </section>

        <section className="bg-green">
          <div className="container mx-auto space-y-6 p-6 lg:py-5">
            <h2 className="text-3xl font-bold text-white-white1" id="sobre">
              Sobre
            </h2>

            {
              <div className="flex flex-col items-center space-y-8 py-5 lg:flex-row lg:items-start lg:justify-center lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
                <Image
                  src={aboutData?.about?.image?.url}
                  alt={aboutData?.about?.image?.alt}
                  width={312}
                  height={392}
                  placeholder="blur"
                  blurDataURL={aboutData?.about?.image?.url}
                  className="rounded-[5px]"
                />

                <p className="max-w-[395px] whitespace-pre-wrap text-base text-white-white1">
                  {aboutData?.about?.text}
                </p>
              </div>
            }
          </div>
        </section>
      </main>

      <footer className="bg-pink" id="contato">
        <div className="container mx-auto flex items-center justify-between pr-3">
          <Link href="/" aria-label="Navegar para a página Home">
            <Logo className="w-[150px]" />
          </Link>

          <ul className="flex items-center space-x-1 text-white-white1">
            <li className="flex items-center">
              <Link
                href="https://www.instagram.com/studio.amandaborges/"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Navegar para o Instagram"
              >
                <Instagram className="w-7" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="https://wa.me/5514998695347"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Navegar para o WhatsApp"
              >
                <WhatsApp className="w-7" />
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="mailto:amanda_leticiah@hotmail.com"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Enviar um e-mail"
              >
                <Email className="w-7" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <ScrollUpButton />

      {process.env.NODE_ENV !== "production" && (
        <Link href="/api/preview">Modo de preview</Link>
      )}
    </>
  );
}
