import { defaultSeo } from "@/lib/seo";
import { NextSeo, NextSeoProps } from "next-seo";
import type { FC, ReactNode } from "react";
import { Fragment } from "react";

interface PageProps extends NextSeoProps {
  children: ReactNode;
  header?: {
    title?: string;
    description?: string;
  };
}

export const Page: FC<PageProps> = ({ children, header, ...props }) => {
  const { title, description } = header || {};
  return (
    <Fragment>
      {header && (
        <header className="flex flex-col gap-2">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </header>
      )}
      <NextSeo {...defaultSeo} {...props} />
      {children}
    </Fragment>
  );
};
