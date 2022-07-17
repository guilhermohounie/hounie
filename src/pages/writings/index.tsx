import { Page } from "@/components/common/Page";
import { WritingCard } from "@/components/common/WritingCard";
import { getAllWritings } from "@/lib/mdx";
import { WritingMetadata } from "@/types/mdx";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const writings = getAllWritings();

  return {
    props: {
      writings,
    },
  };
};

interface WritingsPageProps {
  writings: WritingMetadata[];
}

const WritingsPage: NextPage<WritingsPageProps> = ({ writings }) => {
  return (
    <Page title="Writings" header={{ title: "[Writings.]" }}>
      <main className="py-8">
        <ul className="grid gap-8">
          {writings.map((writing) => {
            return <WritingCard key={writing.title} writing={writing} />;
          })}
        </ul>
      </main>
    </Page>
  );
};

export default WritingsPage;
