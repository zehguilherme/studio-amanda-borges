import Head from "next/head";
import Link from "next/link";

import { PageNotFound } from "@/components/icons/PageNotFound";

export default function NotFound() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#ffffff" />

        {/* Title */}
        <title>Studio Amanda Borges | Página não encontrada</title>
        <meta
          name="title"
          content="Studio Amanda Borges | Página não encontrada"
        />
        <meta
          property="twitter:title"
          content="Studio Amanda Borges | Página não encontrada"
        />

        {/* Description */}
        <meta
          name="description"
          content="Não foi encontrado nenhum conteúdo para essa página!"
        />
        <meta
          property="og:description"
          content="Não foi encontrado nenhum conteúdo para essa página!"
        />
        <meta
          property="twitter:description"
          content="Não foi encontrado nenhum conteúdo para essa página!"
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
        <meta property="twitter:image" content="/not-found-page.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          itemProp="image"
          content="/not-found-page.png"
        />
        <meta property="og:image:width" content="414" />
        <meta property="og:image:height" content="275" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
      </Head>

      <main
        className="bg-white-white2 h-screen w-screen flex justify-center items-center p-6"
        aria-label="main-not-found-page"
      >
        <div className="flex flex-col justify-evenly items-center h-full w-full">
          <PageNotFound className="max-w-[600px]" />

          <h1 className="text-4xl text-black text-center">
            Página não encontrada!
          </h1>

          <Link
            href="/"
            className="text-base bg-green hover:brightness-95 text-white-white1 p-5 rounded-[5px]"
            aria-label="Navegar para a página Home"
          >
            Voltar para Home
          </Link>
        </div>
      </main>
    </>
  );
}
