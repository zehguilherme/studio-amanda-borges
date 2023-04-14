import Head from "next/head";
import Link from "next/link";

import { PageNotFound } from "@/components/icons/PageNotFound";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Studio Amanda Borges | Página não encontrada</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
