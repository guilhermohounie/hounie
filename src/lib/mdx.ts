import type { ArticleMetadata } from "@/types/mdx";
import { readdirSync } from "fs";
import { read } from "gray-matter";

const BASE_URL = "./src/pages/articles/p";

export interface ArticleMetadataWithSlug extends ArticleMetadata {
  slug: string;
}

export function articlesMetadata() {
  const files = readdirSync(BASE_URL);

  let metadatas: ArticleMetadataWithSlug[] = [];

  for (const file of files) {
    const { data } = read(`${BASE_URL}/${file}/index.mdx`);

    metadatas.push({ ...data, slug: file } as ArticleMetadataWithSlug);
  }

  return metadatas;
}
