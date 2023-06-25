/* eslint-disable react/prop-types */
import { Analytics } from "@vercel/analytics/react";
import { Cairo } from "next/font/google";

import "@/styles/globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={cairo.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
