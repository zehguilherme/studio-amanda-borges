import { Icon } from "../../components/Icon";

export function Project() {
  return (
    <>
      <header className="h-[120px] px-6 flex justify-start items-center">
        <a href="/" className="p-[2px] text-black">
          <Icon name="back" className="w-11 h-auto" />
        </a>
      </header>

      <main>
        <h1 className="text-black text-4xl font-bold px-6">Nome do projeto</h1>

        <section className="p-6 space-y-5">
          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Tipo</h2>

            <p className="text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet congue metus. Donec ut enim placerat, maximus ipsum quis,
              laoreet neque.
            </p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Descrição</h2>

            <p className="text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vel nunc vitae ipsum semper pulvinar eu ut metus. Ut et dictum
              est. Aenean ullamcorper justo non elit tincidunt, quis ultricies
              erat convallis.
            </p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Metragem</h2>

            <p className="text-base text-black">105 m²</p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Etapa</h2>

            <p className="text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet congue metus. Donec ut enim placerat, maximus ipsum quis,
              laoreet neque.
            </p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Softwares usados</h2>

            <p className="text-base text-black">
              Revit, Sketchup, AutoCad, Lumion
            </p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Local</h2>

            <p className="text-base text-black">Lorem ipsum</p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">Ano</h2>

            <p className="text-base text-black">2021</p>
          </div>

          <div className="space-y-3 flex flex-col items-start justify-center">
            <h2 className="text-black text-3xl font-bold">
              Programa de Necessidades
            </h2>

            <p className="text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet congue metus. Donec ut enim placerat, maximus ipsum quis,
              laoreet neque. Pellentesque laoreet malesuada nisl id rutrum.
              Nulla euismod commodo tristique. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Morbi lacinia sollicitudin massa,
              quis eleifend ex malesuada ut. Praesent in eros eget dolor
              efficitur accumsan. Proin laoreet pellentesque viverra. Aliquam
              erat volutpat. Curabitur diam lectus, euismod nec massa id,
              eleifend tempus nulla. Nulla vel lobortis nibh. Nam molestie neque
              quis justo pretium, eu pretium orci fermentum. Donec varius
              gravida elementum. Mauris ligula metus, rutrum vel urna id,
              vestibulum suscipit nisi. Suspendisse laoreet urna augue,
              tincidunt congue metus maximus non.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
