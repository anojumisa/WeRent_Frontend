import { Html, Head, Main, NextScript } from "next/document";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Header />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
