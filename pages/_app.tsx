import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#e15f41"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
