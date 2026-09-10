import Link from "next/link";

import { Email } from "@/components/icons/Email";
import { Github } from "@/components/icons/Github";
import { Instagram } from "@/components/icons/Instagram";
import { Linkedin } from "@/components/icons/Linkedin";
import { Logo } from "@/components/icons/Logo";
import { Website } from "@/components/icons/Website";
import { WhatsApp } from "@/components/icons/WhatsApp";

export function Footer() {
  return (
    <footer className="bg-pink" id="contato">
      <div className="container mx-auto flex flex-col gap-4 px-3 py-5 text-white-white1">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Navegar para a página Home">
            <Logo className="w-[150px]" />
          </Link>

          <ul className="flex items-center space-x-1">
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

        <div className="flex flex-col items-center gap-2 border-t border-white-white1/30 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span>Feito por José Guilherme</span>
          <ul className="flex items-center space-x-1">
            <li>
              <Link
                href="https://joseguilherme.vercel.app/"
                target="_blank"
                rel="noreferrer"
                title="Visitar o site de José Guilherme"
                aria-label="Visitar o site de José Guilherme"
                className="inline-block p-[10px] hover:opacity-30"
              >
                <Website className="w-7" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/zehguilherme"
                target="_blank"
                rel="noreferrer"
                title="Visitar o GitHub de José Guilherme"
                aria-label="Visitar o GitHub de José Guilherme"
                className="inline-block p-[10px] hover:opacity-30"
              >
                <Github className="w-7" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/josé-guilherme-paro-monteiro-tomaine/"
                target="_blank"
                rel="noreferrer"
                title="Visitar o LinkedIn de José Guilherme"
                aria-label="Visitar o LinkedIn de José Guilherme"
                className="inline-block p-[10px] hover:opacity-30"
              >
                <Linkedin className="w-7" />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:jgtomaine@hotmail.com"
                target="_blank"
                title="Enviar um e-mail para José Guilherme"
                aria-label="Enviar um e-mail para José Guilherme"
                className="inline-block p-[10px] hover:opacity-30"
              >
                <Email className="w-7" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
