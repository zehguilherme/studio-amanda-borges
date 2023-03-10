import { useQuery } from "graphql-hooks";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import { Link, useSearchParams } from "react-router-dom";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css/bundle";

import { Icon } from "../../components/Icon";
import { ProjectCard } from "../../components/ProjectCard";
import { ScrollUpButton } from "../../components/ScrollUpButton";

export function Home() {
  const [navMenuIsOpened, setNavMenuIsOpened] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const projectTypeSearchParam = searchParams.has("q")
    ? searchParams.get("q")
    : null;

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

  const {
    loading: carouselLoading,
    error: carouselError,
    data: carouselData,
  } = useQuery(CAROUSEL_QUERY);

  const {
    loading: aboutLoading,
    error: aboutError,
    data: aboutData,
  } = useQuery(ABOUT_QUERY);

  const {
    loading: projectsLoading,
    error: projectsError,
    data: projectsData,
  } = useQuery(PROJECTS_QUERY);

  function handleNavMenuChange() {
    setNavMenuIsOpened(!navMenuIsOpened);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Studio Amanda Borges | Home</title>
          <meta name="theme-color" content="#B6939A" />
        </Helmet>
      </HelmetProvider>

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

            <Link to={"/"} aria-label="Navegar para a página Home">
              <Icon name="logo" className="w-[150px]" />
            </Link>

            <button
              type="button"
              className="lg:hidden"
              onClick={handleNavMenuChange}
            >
              {navMenuIsOpened ? (
                <Icon name="xMark" className="w-12" />
              ) : (
                <Icon name="hamburger" className="w-12" />
              )}
            </button>
          </div>

          <nav className={navMenuIsOpened ? "block" : "hidden lg:block"}>
            <ul className="text-white-white1 lg:flex lg:px-6 lg:py-5">
              <li className="text-lg font-bold">
                <Link
                  to={"/"}
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
        {carouselLoading ? (
          <div className="container mx-auto">
            <Skeleton height={500} className="w-full" borderRadius={0} />
          </div>
        ) : (
          !carouselError && (
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
                      <img
                        src={image?.url}
                        alt={image?.alt}
                        className="h-[500px] w-full object-cover object-center"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          )
        )}

        <section className="bg-white-white2">
          <div className="container mx-auto p-6 space-y-6 lg:py-8 lg:space-y-5">
            <h2 className="text-3xl font-bold" id="projetos">
              Projetos
            </h2>

            <ul className="lg:flex justify-center">
              <li>
                <Link
                  to={"/"}
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === null ? "font-bold" : ""
                  }`}
                >
                  Todos
                </Link>
              </li>
              <li>
                <Link
                  to={"/?q=residencial"}
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "residencial" ? "font-bold" : ""
                  }`}
                >
                  Residencial
                </Link>
              </li>
              <li>
                <Link
                  to={"/?q=comercial"}
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "comercial" ? "font-bold" : ""
                  }`}
                >
                  Comercial
                </Link>
              </li>
              <li>
                <Link
                  to={"/?q=interiores"}
                  className={`flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px] ${
                    projectTypeSearchParam === "interiores" ? "font-bold" : ""
                  }`}
                >
                  Interiores
                </Link>
              </li>
            </ul>

            {!projectsError && (
              <div className="flex flex-col justify-center items-center space-y-7 sm:space-y-0 sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {projectsLoading ? (
                  <>
                    <Skeleton width={272} height={272} />
                    <Skeleton width={272} height={272} />
                    <Skeleton width={272} height={272} />
                    <Skeleton width={272} height={272} />
                  </>
                ) : (
                  projectsData?.allProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      projectUrl={`/projeto/${project?.id}`}
                      imgUrl={project?.images[0]?.url}
                      imgTitle={project?.images[0]?.alt}
                      projectTitle={project?.name}
                      projectYear={project?.year}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </section>

        <section className="bg-green">
          <div className="container mx-auto p-6 space-y-6 lg:py-5">
            <h2 className="text-3xl font-bold text-white-white1" id="sobre">
              Sobre
            </h2>

            {!aboutError && (
              <div className="py-5 space-y-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
                {aboutLoading ? (
                  <Skeleton
                    width={272}
                    height={392}
                    baseColor="#dddddd"
                    highlightColor="#dddddd"
                  />
                ) : (
                  <img
                    src={aboutData?.about?.image?.url}
                    alt={aboutData?.about?.image?.alt}
                    className="rounded-[5px]"
                    loading="lazy"
                  />
                )}

                <p className="text-base text-white-white1 max-w-[395px] whitespace-pre-wrap">
                  {aboutLoading ? (
                    <Skeleton count={16} width={272} />
                  ) : (
                    aboutData?.about?.text
                  )}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-pink" id="contato">
        <div className="container mx-auto flex items-center justify-between pr-3">
          <Link to={"/"} aria-label="Navegar para a página Home">
            <Icon name="logo" className="w-[150px]" />
          </Link>

          <ul className="flex items-center space-x-1 text-white-white1">
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/studio.amandaborges/"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Navegar para o Instagram"
              >
                <Icon name="instagram" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/5514998695347"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Navegar para o WhatsApp"
              >
                <Icon name="whatsapp" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="mailto:amanda_leticiah@hotmail.com"
                target="_blank"
                className="inline-block p-[10px]"
                aria-label="Enviar um e-mail"
              >
                <Icon name="email" className="w-7" />
              </a>
            </li>
          </ul>
        </div>
      </footer>

      <ScrollUpButton />
    </>
  );
}
