import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import { Icon } from "../Icon";

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
      className={`rounded-full text-center p-3 bg-gray-200 hover:bg-gray-200/75 fixed bottom-5 right-4 text-black ${
        visible ? "block" : "hidden"
      }`}
      onClick={() => scrollToTop()}
      aria-label="Realizar rolagem da página para o topo"
    >
      <Icon name="arrowUp" className="w-5 lg:w-6" />
    </button>
  );
}
