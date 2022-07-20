import { Page } from "@/components/common/Page";
import { allWritings, Writing } from "@/contentlayer/generated";
import { formatDate } from "@/lib/date";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths = allWritings.map((writing) => writing.slug);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const writing = allWritings.find((writing) => writing.slug === `/writings/${params!.slug}`);

  return {
    props: {
      writing,
    },
  };
};

interface WritingPageProps {
  writing: Writing;
}

const WritingPage: NextPage<WritingPageProps> = ({ writing }) => {
  const { date, description, title } = writing;

  const MDXComponent = useMDXComponent(writing.body.code);

  return (
    <Page
      title={title}
      description={description}
      openGraph={{ title, description }}
      twitter={{
        cardType: "summary_large_image",
        site: "https://www.hounie.me",
      }}
    >
      <div>
        <span className="text-sm text-gray-600">{formatDate(date)}</span>
        <h1 className="mt-2 mb-1">{writing.title}</h1>
      </div>
      <article className="!max-w-full mt-12 prose prose-invert prose-headings:text-primary prose-a:text-primary">
        <MDXComponent />
      </article>
    </Page>
  );
};

export default WritingPage;
