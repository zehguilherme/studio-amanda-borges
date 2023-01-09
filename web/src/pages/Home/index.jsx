import Logo from "../../assets/logo.png";
import { Icon } from "../../components/Icon";

export function Home() {
  return (
    <>
      <header className="pb-6 bg-pink">
        <div className="flex justify-between items-center pr-6 text-white-white1">
          <a href="/">
            <img src={Logo} alt="Imagem do logo do site Studio Amanda Borges" />
          </a>

          <Icon name="hamburger" />
        </div>

        <nav>
          <ul className="text-white-white1">
            <li className="text-lg font-bold">
              <a href="#" className="flex justify-center items-center h-12">
                Home
              </a>
            </li>
            <li className="text-lg font-bold">
              <a href="#" className="flex justify-center items-center h-12">
                Projetos
              </a>
            </li>
            <li className="text-lg font-bold">
              <a href="#" className="flex justify-center items-center h-12">
                Sobre
              </a>
            </li>
            <li className="text-lg font-bold">
              <a href="#" className="flex justify-center items-center h-12">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="p-6 space-y-6">
          <h2 className="text-3xl font-bold">Projetos</h2>

          <ul>
            <li>
              <a
                href="#"
                className="flex justify-center items-center h-12 text-2xl font-bold"
              >
                Todos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center h-12 text-2xl"
              >
                Residencial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center h-12 text-2xl"
              >
                Comercial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-center items-center h-12 text-2xl"
              >
                Interiores
              </a>
            </li>
          </ul>

          <div className="w-full h-[312px] rounded-[5px] flex items-end bg-[url('https://picsum.photos/312/312')]">
            <div className="flex flex-col items-start space-y-1 p-6 w-full bg-gradient-to-t from-gray-900">
              <h4 className="text-white-white1 text-xl font-bold">
                Lorem ipsum dolor sit amet
              </h4>

              <span className="text-white-white1 text-base">2023</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
