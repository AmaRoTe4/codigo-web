import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/buscar.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
        {/*<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>*/}
        {/*<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>*/}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

//transition styles
//animatiss
