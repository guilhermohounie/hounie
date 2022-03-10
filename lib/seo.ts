import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s",
  defaultTitle: "Guilhermo Hounie",
  description: "web app template.",
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    title: "Guilhermo Hounie",
    description: "web app template.",
    images: [
      {
        url: "/og.png",
        alt: "Guilhermo Hounie",
      },
    ],
  },
};
