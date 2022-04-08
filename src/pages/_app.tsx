import "@/styles/global.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
