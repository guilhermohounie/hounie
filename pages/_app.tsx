import "@styles/global.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
