import { WritingMetadata } from "@/types/mdx";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const ROOT = process.cwd();

const writingsPath = path.join(ROOT, "src/writings");

export function getAllWritings() {
  const files = fs.readdirSync(writingsPath);

  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const metadatas = mdxFiles.map((file) => {
    const metadata = fs.readFileSync(`${writingsPath}/${file}`, "utf8");
    const { data } = matter(metadata);
    return { ...data, slug: file.replace(".mdx", "") } as WritingMetadata;
  });

  return metadatas
    .sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    })
    .reverse();
}

export function getWriting(filename: string) {
  const file = fs.readFileSync(`${writingsPath}/${filename}.mdx`, "utf8");
  const { content, data } = matter(file);
  return { ...data, content };
}
