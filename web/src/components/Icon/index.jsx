import { ReactComponent as arrowUp } from "./svgs/arrow-up.svg";
import { ReactComponent as back } from "./svgs/back.svg";
import { ReactComponent as email } from "./svgs/email.svg";
import { ReactComponent as hamburger } from "./svgs/hamburguer.svg";
import { ReactComponent as instagram } from "./svgs/instagram.svg";
import { ReactComponent as whatsapp } from "./svgs/whatsapp.svg";
import { ReactComponent as xMark } from "./svgs/x-mark.svg";

const icons = {
  arrowUp: arrowUp,
  back: back,
  instagram: instagram,
  whatsapp: whatsapp,
  email: email,
  hamburger: hamburger,
  xMark: xMark,
};

export function Icon({ name, ...props }) {
  const Element = icons[name];

  return <Element {...props} />;
}
