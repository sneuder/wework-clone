/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="//www-static.wework.com/apercu/apercu.css"
          as="style"
        />

        <link
          rel="stylesheet"
          href="//www-static.wework.com/apercu/apercu.css"
        />

        <link
          rel="stylesheet"
          href="//www-static.wework.com/apercu/apercu_mono.css"
        />

        <link
          rel="stylesheet"
          href="/vanilla-assets/stylesheets/vendor.bc11321946874dd2d91a972acd538f05.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
