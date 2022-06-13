import { Layout } from "@/components/common/Layout";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
