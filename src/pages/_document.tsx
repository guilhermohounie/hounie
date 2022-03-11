import { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

const Document: FC<DocumentProps> = () => {
  return (
    <Html dir="ltr" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
