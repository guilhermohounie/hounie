import { Page } from "@components/common/Page";
import { PageHeader } from "@components/common/PageHeader";
import type { NextPage } from "next";

const WritingsPage: NextPage = () => {
  return (
    <Page title="Writings.">
      <PageHeader title="[Writings.]" description="Some thoughts badly written." />
      <main></main>
    </Page>
  );
};

export default WritingsPage;
