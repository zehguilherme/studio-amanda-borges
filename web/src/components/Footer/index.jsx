import Link from "next/link";

import { Email } from "@/components/icons/Email";
import { Instagram } from "@/components/icons/Instagram";
import { Logo } from "@/components/icons/Logo";
import { WhatsApp } from "@/components/icons/WhatsApp";

export function Footer() {
  return (
    <footer className="bg-pink" id="contato">
      <div className="container mx-auto flex items-center justify-between pr-3">
        <Link href="/" aria-label="Navegar para a página Home">
          <Logo className="w-[150px]" />
        </Link>

        <ul className="flex items-center space-x-1 text-white-white1">
          <li className="flex items-center">
            <Link
              href="https://www.instagram.com/amanda_detalha"
              target="_blank"
              title="Navegar para a página do Instagram"
              className="inline-block p-[10px] hover:opacity-30"
              aria-label="Navegar para a página do Instagram"
            >
              <Instagram className="w-7" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="https://wa.me/5514998695347"
              target="_blank"
              title="Entrar em contato via WhatsApp"
              className="inline-block p-[10px] hover:opacity-30"
              aria-label="Entrar em contato via WhatsApp"
            >
              <WhatsApp className="w-7" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="mailto:amanda_leticiah@hotmail.com"
              target="_blank"
              title="Enviar um e-mail"
              className="inline-block p-[10px] hover:opacity-30"
              aria-label="Enviar um e-mail"
            >
              <Email className="w-7" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
