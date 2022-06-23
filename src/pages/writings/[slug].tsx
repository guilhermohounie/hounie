import { Page } from "@/components/common/Page";
import { getAllWritings, getWriting } from "@/lib/mdx";
import { WritingMetadata } from "@/types/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import type { FC } from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const writings = getAllWritings();

  return {
    paths: writings.map((writing) => {
      return {
        params: {
          slug: writing.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writing = getWriting(params!.slug as string);

  const content = await serialize(writing.content, {});

  return {
    props: {
      writing: {
        ...writing,
        content,
      },
    },
  };
};

interface WritingPageProps {
  writing: WritingMetadata & {
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
}

const WritingPage: FC<WritingPageProps> = ({ writing }) => {
  const { content, date, description, slug, tags, title } = writing;

  return (
    <Page title={title} description={description}>
      <div className="pb-4 border-b-2 border-white border-dashed">
        <span className="text-sm text-gray-600">{date}</span>
        <h1 className="text-orange-400">{writing.title}</h1>
        <p>{writing.description}</p>
      </div>
      <article className="!max-w-full mt-12 prose prose-invert prose-headings:text-orange-400">
        <MDXRemote {...content} />
      </article>
    </Page>
  );
};

export default WritingPage;
