import { defaultSeo } from "@/lib/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import type { FC, ReactNode } from "react";
import { Fragment } from "react";

interface PageProps extends NextSeoProps {
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <NextSeo {...defaultSeo} {...props} />
      {children}
    </Fragment>
  );
};
