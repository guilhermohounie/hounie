import { ArticleCard } from "@/components/common/ArticleCard";
import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import type { ArticleMetadataWithSlug } from "@/lib/mdx";
import { articlesMetadata } from "@/lib/mdx";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const articles = articlesMetadata();

  return {
    props: { articles },
    revalidate: false,
  };
};

interface WritingsPageProps {
  articles: ArticleMetadataWithSlug[];
}

const WritingsPage: NextPage<WritingsPageProps> = ({ articles }) => {
  return (
    <Page title="Writings.">
      <PageHeader title="[Writings.]" description="Some thoughts badly written." />
      <main className="py-8">
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.slug} article={article} />;
          })}
        </ul>
      </main>
    </Page>
  );
};

export default WritingsPage;
