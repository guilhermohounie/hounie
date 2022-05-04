import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Guilhermo Hounie",
  description: "Guilhermo Hounie's personal webspace.",
  openGraph: {
    type: "website",
    url: "http://hounie.me",
    title: "Guilhermo Hounie",
    description: "Guilhermo Hounie's personal webspace.",
    images: [
      {
        url: "/og.png",
        alt: "Guilhermo Hounie",
      },
    ],
  },
};
