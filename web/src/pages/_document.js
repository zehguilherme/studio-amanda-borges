import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="pt_BR" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="./public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon-16x16.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
