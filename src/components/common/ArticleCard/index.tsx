import type { ArticleMetadataWithSlug } from "@/lib/mdx";
import NextLink from "next/link";
import type { FC } from "react";

interface ArticleCardProps {
  article: ArticleMetadataWithSlug;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const { date, description, slug, title } = article;
  return (
    <article className="flex flex-col gap-2">
      <p className="self-end">{date}</p>
      <section>
        <h4>
          <NextLink href={`/articles/p/${slug}`}>
            <a className="underline">{title}</a>
          </NextLink>
        </h4>
        <p>{description}</p>
      </section>
    </article>
  );
};
