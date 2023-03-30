import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:locale" content="pt_BR" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Studio Amanda Borges" />
        <meta name="description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
interiores, comerciais, residenciais e de móveis e expositores."/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studioamandaborges.vercel.app/" />
        <meta property="og:title" content="Studio Amanda Borges" />
        <meta property="og:description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
interiores, comerciais, residenciais e de móveis e expositores."/>
        <meta property="og:image" content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png" />

        {/* WhatsApp */}
        <meta property="og:image:secure_url"
          content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1894" />
        <meta property="og:image:height" content="921" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://studioamandaborges.vercel.app/" />
        <meta property="twitter:title" content="Studio Amanda Borges" />
        <meta property="twitter:description" content="Meu nome é Amanda Borges! Sou formada em Arquitetura e Urbanismo pela Universidade Paulista na cidade de Bauru/SP e já trabalhei com projetos de
interiores, comerciais, residenciais e de móveis e expositores."/>
        <meta property="twitter:image" content="https://www.datocms-assets.com/85603/1678211901-studio_amanda_borges.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="./public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./public/favicon-16x16.png" />
        <link rel="manifest" href="./public/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
