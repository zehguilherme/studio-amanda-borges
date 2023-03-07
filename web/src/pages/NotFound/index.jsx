import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

import { Icon } from "../../components/Icon";

export function NotFound() {
  return (
    <>
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Studio Amanda Borges | Página não encontrada</title>
        </Helmet>
      </HelmetProvider>

      <main
        className="bg-white-white2 h-screen w-screen flex justify-center items-center p-6"
        aria-label="main-not-found-page"
      >
        <div className="flex flex-col justify-evenly items-center h-full w-full">
          <Icon name="pageNotFound" className="max-w-[600px]" />

          <h1 className="text-4xl text-black text-center">
            Página não encontrada!
          </h1>

          <Link
            to={"/"}
            className="text-base bg-green hover:brightness-95 text-white-white1 p-5 rounded-[5px]"
          >
            Voltar para Home
          </Link>
        </div>
      </main>
    </>
  );
}
