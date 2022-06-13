import { defaultSeo } from "@/lib/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import { FC, Fragment } from "react";

interface PageProps extends NextSeoProps {}

export const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <NextSeo {...defaultSeo} {...props} />
      {children}
    </Fragment>
  );
};
