import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Guilhermo Hounie",
  description: "O espaço pessoal de Guilhermo Hounie na web.",
  openGraph: {
    type: "website",
    url: "http://hounie.me",
    title: "Guilhermo Hounie",
    description: "O espaço pessoal de Guilhermo Hounie na web.",
    images: [
      {
        url: "/og.png",
        alt: "Guilhermo Hounie",
      },
    ],
  },
};
