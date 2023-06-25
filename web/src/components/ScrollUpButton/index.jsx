import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import { ArrowUp } from "../icons/ArrowUp";

export function ScrollUpButton() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  return (
    <button
      className={`fixed bottom-5 right-4 rounded-full bg-gray-200 p-3 text-center text-black hover:bg-gray-200/75 ${
        visible ? "block" : "hidden"
      }`}
      onClick={() => scrollToTop()}
      aria-label="Realizar rolagem da página para o topo"
    >
      {/* <Icon name="arrowUp" className="w-5 lg:w-6" /> */}
      <ArrowUp className="w-5 lg:w-6" />
    </button>
  );
}
