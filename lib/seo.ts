import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const DefaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | orichalcum",
  defaultTitle: "Orichalcum",
  description: "web app template.",
  openGraph: {
    type: "website",
    url: "http://localhost:3000",
    title: "orichalcum",
    description: "weba app template.",
    images: [
      {
        url: "/og.png",
        alt: "Orichalcum",
      },
    ],
  },
};
