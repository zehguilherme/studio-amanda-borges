import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { request } from '@/infra/cms/datocms';

import { Hamburguer } from '@/components/icons/Hamburger';
import { Logo } from '@/components/icons/Logo';
import { Xmark } from '@/components/icons/Xmark';

import "swiper/css/bundle";

export async function getServerSideProps () {
  const CAROUSEL_QUERY = `query {
    carousel {
      images {
        id,
        url,
        alt
      }
    }
  }`;

  const carouselData = await request({
    query: CAROUSEL_QUERY
  });

  return {
    props: { carouselData }
  }
}

export default function Home ({ carouselData }) {
  const [navMenuIsOpened, setNavMenuIsOpened] = useState(false);

  function handleNavMenuChange () {
    setNavMenuIsOpened(!navMenuIsOpened);
  }

  return (
    <>
      <Head>
        <title>Studio Amanda Borges | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              onClick={handleNavMenuChange}
            >
              {navMenuIsOpened ? (
                <Xmark className="w-12" />
              ) : (
                <Hamburguer className="w-12" />
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
                    width={1536}
                    height={500}
                    placeholder='blur'
                    blurDataURL={image?.url}
                    className="h-[500px] w-full object-cover object-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  )
}