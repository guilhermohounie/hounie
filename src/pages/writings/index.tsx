import { Page } from "@/components/common/Page";
import { WritingCard } from "@/components/common/WritingCard";
import { allWritings, Writing } from "@/contentlayer/generated";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const writings = allWritings
    .sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    })
    .filter((metadata) => (process.env.NODE_ENV === "development" ? true : metadata.published));

  return {
    props: {
      writings,
    },
  };
};

interface WritingPageProps {
  writings: Writing[];
}

const WritingsPage: NextPage<WritingPageProps> = ({ writings }) => {
  return (
    <Page title="Writings" header={{ title: "[Writings.]" }}>
      <main className="py-8">
        <ul className="grid gap-8">
          {writings.map((writing) => {
            return (
              <li key={writing.title}>
                <WritingCard writing={writing} />
              </li>
            );
          })}
        </ul>
      </main>
    </Page>
  );
};

export default WritingsPage;
