import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { request } from "@/infra/cms/datocms";

import { ProjectCard } from "@/components/ProjectCard";
import { ScrollUpButton } from "@/components/ScrollUpButton";
import { Email } from "@/components/icons/Email";
import { Hamburguer } from "@/components/icons/Hamburger";
import { Instagram } from "@/components/icons/Instagram";
import { Logo } from "@/components/icons/Logo";
import { WhatsApp } from "@/components/icons/WhatsApp";
import { Xmark } from "@/components/icons/Xmark";

import "swiper/css/bundle";

export async function getServerSideProps(context) {
  const { query, preview } = context;
  const { q: projectTypeSearchParam } = query;

  const projectTypeSearchParamcapitalFirstLetter = projectTypeSearchParam
    ?.toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());

  const filter =
    projectTypeSearchParamcapitalFirstLetter === undefined
      ? ""
      : `, filter: {
      projectType: { eq: ${projectTypeSearchParamcapitalFirstLetter} }
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
        <title>Studio Amanda Borges | Home</title>
        <meta name="title" content="Studio Amanda Borges | Home" />
        <meta property="twitter:title" content="Studio Amanda Borges | Home" />

        {/* Description */}
        <meta
          name="description"
          content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
interiores, comerciais, residenciais e de móveis e expositores."
        />
        <meta
          property="og:description"
          content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
          interiores, comerciais, residenciais e de móveis e expositores."
        />
        <meta
          property="twitter:description"
          content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
          interiores, comerciais, residenciais e de móveis e expositores."
        />

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
        <meta
          property="twitter:image"
          content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          itemProp="image"
          content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png"
        />
        <meta property="og:image:width" content="526" />
        <meta property="og:image:height" content="275" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
      </Head>

      <header className="bg-pink">
        <div
          className={
            navMenuIsOpened
              ? "pb-6 container mx-auto lg:p-0 lg:flex lg:justify-between lg:items-center"
              : "container mx-auto lg:p-0 lg:flex lg:justify-between lg:items-center"
          }
        >
          <div className="flex justify-between items-center pr-6 text-white-white1 lg:p-0 lg:flex-none">
            <h1 className="sr-only">Studio Amanda Borges</h1>

            <Link href="/" aria-label="Navegar para a página Home">
              <Logo className="w-[150px]" />
            </Link>

            <button
              type="button"
              className="lg:hidden"
              aria-label="Botão hambúrguer"
              onClick={handleNavMenuChange}
            >
              {navMenuIsOpened ? (
                <Xmark className="w-12" aria-expanded="true" />
              ) : (
                <Hamburguer className="w-12" aria-expanded="false" />
              )}
            </button>
          </div>

          <nav className={navMenuIsOpened ? "block" : "hidden lg:block"}>
            <ul className="text-white-white1 lg:flex lg:px-6 lg:py-5">
              <li className="text-lg font-bold">
                <Link
                  href="/"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#projetos"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Projetos
                </a>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#sobre"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Sobre
                </a>
              </li>
              <li className="text-lg font-bold">
                <a
                  href="#contato"
                  className="flex justify-center items-center h-12 lg:h-11 px-6 hover:transition-all duration-100 hover:opacity-50 lg:hover:border-b lg:hover:opacity-100"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
          <div className="container mx-auto p-6 space-y-6 lg:py-8 lg:space-y-5">
            <h2 className="text-3xl font-bold" id="projetos">
              Projetos
            </h2>

            <ul className="lg:flex justify-center">
              <li>
                <Link
                  href="/"
                  scroll={false}
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
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
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
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
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
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
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
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
              className={`flex flex-col justify-center items-center space-y-7 sm:space-y-0 ${
                noProjectsFound
                  ? ""
                  : "sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
            >
              {noProjectsFound ? (
                <div className="flex flex-col items-center space-y-10 w-full h-full">
                  <h3 className="text-black text-xl font-bold text-center">
                    Nenhum projeto encontrado nessa categoria!
                  </h3>
                </div>
              ) : (
                projectsData?.allProjects?.map(project => (
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
          <div className="container mx-auto p-6 space-y-6 lg:py-5">
            <h2 className="text-3xl font-bold text-white-white1" id="sobre">
              Sobre
            </h2>

            {
              <div className="py-5 space-y-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
                <Image
                  src={aboutData?.about?.image?.url}
                  alt={aboutData?.about?.image?.alt}
                  width={312}
                  height={392}
                  placeholder="blur"
                  blurDataURL={aboutData?.about?.image?.url}
                  className="rounded-[5px]"
                />

                <p className="text-base text-white-white1 max-w-[395px] whitespace-pre-wrap">
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