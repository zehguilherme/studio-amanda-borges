import Link from "next/link";

import { ArrowBack } from "../icons/ArrowBack";

export function HeaderProject() {
  return (
    <header>
      <div className="container mx-auto flex h-[120px] items-center justify-start px-6">
        <Link
          href="/"
          scroll={false}
          className="p-[2px] text-black"
          aria-label="Navegar para a página Home"
        >
          <ArrowBack className="h-auto w-11" />
        </Link>
      </div>
    </header>
  );
}
