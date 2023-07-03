/* eslint-disable react/prop-types */
import Link from "next/link";

import { Hamburguer } from "@/components/icons/Hamburger";
import { Logo } from "@/components/icons/Logo";
import { Xmark } from "@/components/icons/Xmark";

export function Header({ navMenuIsOpened, handleNavMenuChange }) {
  return (
    <header className="bg-pink">
      <div
        className={
          navMenuIsOpened
            ? "container mx-auto pb-6 lg:flex lg:items-center lg:justify-between lg:p-0"
            : "container mx-auto lg:flex lg:items-center lg:justify-between lg:p-0"
        }
      >
        <div className="flex items-center justify-between pr-6 text-white-white1 lg:flex-none lg:p-0">
          <h1 className="sr-only">Studio Amanda Borges</h1>

          <Link href="/" aria-label="Navegar para a página Home">
            <Logo className="w-[150px]" />
          </Link>

          <button
            type="button"
            className="lg:hidden"
            name="menu-button"
            aria-label={`${
              navMenuIsOpened ? "Botão contendo a letra X" : "Botão hambúrguer"
            }`}
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
                className="flex h-12 items-center justify-center px-6 duration-100 hover:opacity-50 hover:transition-all lg:h-11 lg:hover:border-b lg:hover:opacity-100"
              >
                Home
              </Link>
            </li>
            <li className="text-lg font-bold">
              <a
                href="#projetos"
                className="flex h-12 items-center justify-center px-6 duration-100 hover:opacity-50 hover:transition-all lg:h-11 lg:hover:border-b lg:hover:opacity-100"
              >
                Projetos
              </a>
            </li>
            <li className="text-lg font-bold">
              <a
                href="#sobre"
                className="flex h-12 items-center justify-center px-6 duration-100 hover:opacity-50 hover:transition-all lg:h-11 lg:hover:border-b lg:hover:opacity-100"
              >
                Sobre
              </a>
            </li>
            <li className="text-lg font-bold">
              <a
                href="#contato"
                className="flex h-12 items-center justify-center px-6 duration-100 hover:opacity-50 hover:transition-all lg:h-11 lg:hover:border-b lg:hover:opacity-100"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
