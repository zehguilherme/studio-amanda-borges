import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.png";
import { Icon } from "../../components/Icon";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Studio Amanda Borges | Home</title>
      </Helmet>

      <header className="bg-pink">
        <div className="container mx-auto pb-6 lg:p-0 lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-between items-center pr-6 text-white-white1 lg:p-0 lg:flex-none">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="Imagem do logo do site Studio Amanda Borges"
              />
            </Link>

            <Icon name="hamburger" className="w-12 lg:hidden" />
          </div>

          <nav>
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

      <main>
        <section className="bg-white-white2">
          <div className="container mx-auto p-6 space-y-6 lg:py-8 lg:space-y-5">
            <h2 className="text-3xl font-bold" id="projetos">
              Projetos
            </h2>

            <ul className="lg:flex justify-center">
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl font-bold lg:lg:h-11 lg:p-[14px]"
                >
                  Todos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Residencial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Comercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center h-12 text-2xl lg:lg:h-11 lg:p-[14px]"
                >
                  Interiores
                </a>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center space-y-7 sm:space-y-0 sm:grid sm:gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Link to={"/projeto"}>
                <div className="aspect-square rounded-[5px] flex items-end bg-[url('https://picsum.photos/400/400')]">
                  <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
                    <h4 className="text-white-white1 text-xl font-bold">
                      Lorem ipsum dolor sit amet
                    </h4>

                    <span className="text-white-white1 text-base">2023</span>
                  </div>
                </div>
              </Link>

              <Link to={"/projeto"}>
                <div className="aspect-square rounded-[5px] flex items-end bg-[url('https://picsum.photos/400/400')]">
                  <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
                    <h4 className="text-white-white1 text-xl font-bold">
                      Lorem ipsum dolor sit amet
                    </h4>

                    <span className="text-white-white1 text-base">2023</span>
                  </div>
                </div>
              </Link>

              <Link to={"/projeto"}>
                <div className="aspect-square rounded-[5px] flex items-end bg-[url('https://picsum.photos/400/400')]">
                  <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
                    <h4 className="text-white-white1 text-xl font-bold">
                      Lorem ipsum dolor sit amet
                    </h4>

                    <span className="text-white-white1 text-base">2023</span>
                  </div>
                </div>
              </Link>

              <Link to={"/projeto"}>
                <div className="aspect-square rounded-[5px] flex items-end bg-[url('https://picsum.photos/400/400')]">
                  <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
                    <h4 className="text-white-white1 text-xl font-bold">
                      Lorem ipsum dolor sit amet
                    </h4>

                    <span className="text-white-white1 text-base">2023</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-green">
          <div className="container mx-auto p-6 space-y-6 lg:py-5">
            <h2 className="text-3xl font-bold text-white-white1" id="sobre">
              Sobre
            </h2>

            <div className="py-5 space-y-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-12 lg:space-y-0 lg:px-6 lg:py-5">
              <img
                src={Profile}
                alt="Imagem em formato retrato de Amanda Borges"
                className="rounded-[5px]"
              />

              <p className="text-base text-white-white1 max-w-[395px]">
                Olá, eu sou a Amanda Borges e seja muito bem-vindo ao meu
                perfil. Sou formada em Arquitetura e Urbanismo pela Universidade
                Paulista na cidade de Bauru/SP e estou inserida na área de
                projetos de arquitetura e design de interiores. Iniciei neste
                mundo no 1º ano da faculdade (2017), realizando alguns estágios
                nas áreas de arquitetura comercial, residencial e design de
                interiores. Sempre estou me empenhando em entender e colocar em
                prática o maior número de ferramentas e softwares, sempre
                visando o conhecimento, este, sendo indispensável,
                independentemente da área em que se atua.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink" id="contato">
        <div className="container mx-auto flex items-center justify-between pr-3">
          <a href="/">
            <img src={Logo} alt="Imagem do logo do site Studio Amanda Borges" />
          </a>

          <ul className="flex items-center space-x-1 text-white-white1">
            <li className="flex items-center">
              <a
                href="https://www.instagram.com/studio.amandaborges/"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="instagram" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://wa.me/5514998695347"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="whatsapp" className="w-7" />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="mailto:amanda_leticiah@hotmail.com"
                target="_blank"
                className="inline-block p-[10px]"
              >
                <Icon name="email" className="w-7" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
