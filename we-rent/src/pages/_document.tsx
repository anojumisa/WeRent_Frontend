import { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/header";
import Banner from "./components/banner";

export default function Document() {
  return (
    <Html lang="en">
      <Header />
      <Head />
      <Banner />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
