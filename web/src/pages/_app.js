/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cairo } from "next/font/google";

import "@/styles/globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={cairo.className}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
