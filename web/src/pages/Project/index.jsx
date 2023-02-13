import { useQuery } from "graphql-hooks";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

import { Icon } from "../../components/Icon";

export function Project() {
  const { id } = useParams();

  const PROJECT_QUERY = `query {
    project(filter: {
      id: {eq: ${id}}
    }) {
      id
      name
      images {
        id
        url
        alt
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

  const { loading, error, data } = useQuery(PROJECT_QUERY);

  return (
    <>
      <Helmet>
        <title>Studio Amanda Borges | Projeto</title>
        <meta name="theme-color" content="#F4F4F4" />
      </Helmet>

      <div className="bg-white-white2">
        <header>
          <div className="container mx-auto h-[120px] px-6 flex justify-start items-center">
            <Link to={"/"} className="p-[2px] text-black">
              <Icon name="back" className="w-11 h-auto" />
            </Link>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center items-center p-7 bg-white-white2">
            <Icon className="animate-spin h-8 w-8" name="spin" />
          </div>
        ) : (
          !error && (
            <main className="container mx-auto">
              <h1 className="text-black text-4xl font-bold px-6 break-words">
                {data?.project?.name}
              </h1>

              <div className="xl:flex xl:items-start xl:px-6 xl:py-8 xl:space-x-reverse xl:space-x-[55px]">
                <section className="p-6 space-y-5 xl:order-2 xl:p-0 xl:space-y-5 xl:w-1/2">
                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Tipo
                    </h2>

                    <p className="text-base text-black xl:w-full">
                      {data?.project?.projectType}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Descrição
                    </h2>

                    <p className="text-base text-black xl:w-full whitespace-pre-line">
                      {data?.project?.description}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Metragem
                    </h2>

                    <p className="text-base text-black xl:w-full">
                      {data?.project?.metreage.toString().replace(".", ",")} m²
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Etapa apresentada
                    </h2>

                    <p className="xl:w-full space-x-5">
                      {data?.project?.stepPresented?.map((stepPresented) => (
                        <span
                          key={stepPresented}
                          className="inline-block text-base text-black"
                        >
                          {stepPresented}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Softwares usados
                    </h2>

                    <p className="xl:w-full space-x-5">
                      {data?.project?.usedSoftware?.map((software) => (
                        <span
                          key={software}
                          className="inline-block text-base text-black"
                        >
                          {software}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Local
                    </h2>

                    <p className="text-base text-black xl:w-full">
                      {data?.project?.place}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Ano
                    </h2>

                    <p className="text-base text-black xl:w-full">
                      {data?.project?.year}
                    </p>
                  </div>

                  <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                    <h2 className="text-black text-3xl font-bold xl:w-full">
                      Programa de Necessidades
                    </h2>

                    <p className="text-base text-black xl:w-full">
                      {data?.project?.needsProgram}
                    </p>
                  </div>
                </section>

                <section className="flex flex-col justify-center items-center space-y-8 px-6 pb-6 sm:grid sm:space-y-0 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-2 xl:order-1 xl:p-0 xl:w-1/2">
                  {data?.project?.images?.map((projectImage) => (
                    <img
                      key={projectImage?.id}
                      src={projectImage?.url}
                      alt={projectImage?.alt}
                      className="rounded-[5px] aspect-square object-cover object-center"
                    />
                  ))}
                </section>
              </div>
            </main>
          )
        )}
      </div>
    </>
  );
}
