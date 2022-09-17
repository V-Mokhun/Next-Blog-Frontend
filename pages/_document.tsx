import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/georgia/Georgia-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/georgia/Georgia-Italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/georgia/Georgia-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Italic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/helvetica/HelveticaNeue-Black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>
        <body className="font-helvetica bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
