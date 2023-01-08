import Logo from "../../assets/logo.png";
import { Icon } from "../../components/Icon";

export function Home() {
  return (
    <header className="pb-6 bg-pink">
      <div className="flex justify-between items-center pr-6 text-white-white1">
        <a href="/">
          <img src={Logo} alt="Imagem do logo do site Studio Amanda Borges" />
        </a>

        <Icon name="hamburger" />
      </div>

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
    </header>
  );
}
