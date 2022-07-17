import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Guilhermo Hounie",
  description: "Guilhermo Hounie's personal webspace.",
  twitter: {
    cardType: "summary_large_image",
    handle: "@guilhermohounie",
    site: "https://hounie.me",
  },
  openGraph: {
    type: "website",
    url: "http://hounie.me",
    title: "Guilhermo Hounie",
    description: "Guilhermo Hounie's personal webspace.",
    images: [
      {
        url: "/assets/media/og.png",
        height: 700,
        width: 700,
        alt: "Guilhermo Hounie",
      },
    ],
  },
};
