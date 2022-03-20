import type { ArticleMetadata } from "@/types/mdx";
import { toBlurHash } from "@/utils/blurhash";
import Image from "next/image";
import type { FC } from "react";

interface ArticleLayoutProps {
  metadata: ArticleMetadata;
}

export const ArticleLayout: FC<ArticleLayoutProps> = ({ metadata, children }) => {
  const { date, description, title, cover, blur } = metadata;

  return (
    <section>
      <div className="flex flex-col gap-4">
        <p className="self-end">{date}</p>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          <Image
            src={cover}
            alt={title}
            height={400}
            width={640}
            layout="responsive"
            placeholder="blur"
            blurDataURL={toBlurHash(blur)}
            className="object-cover"
          />
        </div>
      </div>
      <article className="pt-16 article">{children}</article>
    </section>
  );
};
