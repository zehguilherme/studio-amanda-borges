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
              href="https://www.instagram.com/studio.amandaborges"
              target="_blank"
              className="inline-block p-[10px]"
              aria-label="Navegar para o Instagram"
            >
              <Instagram className="w-7" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="https://wa.me/5514998695347"
              target="_blank"
              className="inline-block p-[10px]"
              aria-label="Navegar para o WhatsApp"
            >
              <WhatsApp className="w-7" />
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href="mailto:amanda_leticiah@hotmail.com"
              target="_blank"
              className="inline-block p-[10px]"
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
