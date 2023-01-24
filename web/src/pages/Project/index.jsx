import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { Icon } from "../../components/Icon";

export function Project() {
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

        <main className="container mx-auto">
          <h1 className="text-black text-4xl font-bold px-6">
            Nome do projeto
          </h1>

          <div className="xl:flex xl:items-start xl:px-6 xl:py-8 xl:space-x-reverse xl:space-x-[55px]">
            <section className="p-6 space-y-5 xl:order-2 xl:p-0 xl:space-y-5 xl:w-1/2">
              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Tipo
                </h2>

                <p className="text-base text-black xl:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet congue metus. Donec ut enim placerat, maximus
                  ipsum quis, laoreet neque.
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Descrição
                </h2>

                <p className="text-base text-black xl:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean vel nunc vitae ipsum semper pulvinar eu ut metus. Ut et
                  dictum est. Aenean ullamcorper justo non elit tincidunt, quis
                  ultricies erat convallis.
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Metragem
                </h2>

                <p className="text-base text-black xl:w-full">105 m²</p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Etapa
                </h2>

                <p className="text-base text-black xl:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet congue metus. Donec ut enim placerat, maximus
                  ipsum quis, laoreet neque.
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Softwares usados
                </h2>

                <p className="text-base text-black xl:w-full">
                  Revit, Sketchup, AutoCad, Lumion
                </p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Local
                </h2>

                <p className="text-base text-black xl:w-full">Lorem ipsum</p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">Ano</h2>

                <p className="text-base text-black xl:w-full">2021</p>
              </div>

              <div className="space-y-3 flex flex-col items-start justify-center xl:flex-row xl:space-x-7 xl:space-y-0 xl:justify-start">
                <h2 className="text-black text-3xl font-bold xl:w-full">
                  Programa de Necessidades
                </h2>

                <p className="text-base text-black xl:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sit amet congue metus. Donec ut enim placerat, maximus
                  ipsum quis, laoreet neque. Pellentesque laoreet malesuada nisl
                  id rutrum. Nulla euismod commodo tristique. Interdum et
                  malesuada fames ac ante ipsum primis in faucibus. Morbi
                  lacinia sollicitudin massa, quis eleifend ex malesuada ut.
                  Praesent in eros eget dolor efficitur accumsan. Proin laoreet
                  pellentesque viverra. Aliquam erat volutpat. Curabitur diam
                  lectus, euismod nec massa id, eleifend tempus nulla. Nulla vel
                  lobortis nibh. Nam molestie neque quis justo pretium, eu
                  pretium orci fermentum. Donec varius gravida elementum. Mauris
                  ligula metus, rutrum vel urna id, vestibulum suscipit nisi.
                  Suspendisse laoreet urna augue, tincidunt congue metus maximus
                  non.
                </p>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center space-y-8 px-6 pb-6 sm:grid sm:space-y-0 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-2 xl:order-1 xl:p-0 xl:w-1/2">
              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />

              <img
                src="https://picsum.photos/340"
                alt="Descrição da imagem"
                className="rounded-[5px] xl:w-[340px]"
              />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
