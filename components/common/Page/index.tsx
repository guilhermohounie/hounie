import { defaultSeo } from "@lib/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import { FC, Fragment } from "react";
import { Dock } from "../Dock";

interface PageProps extends NextSeoProps {}

export const Page: FC<PageProps> = ({ children, ...props }) => {
  return (
    <Fragment>
      <NextSeo {...defaultSeo} {...props} />
      <div className="relative flex flex-col max-w-screen-sm min-h-screen px-4 pt-16 mx-auto selection:bg-rose-400 selection:text-white">
        <div className="flex flex-col flex-1 pb-32">{children}</div>
        <Dock />
      </div>
    </Fragment>
  );
};
