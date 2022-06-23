import { BaseLayout } from "@/layouts/Base";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
};

export default App;
