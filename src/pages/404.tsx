import { Page } from "@/components/common/Page";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <Page title="Nothing to see here.">
      <main>
        <h3>There is nothing to see here.</h3>
      </main>
    </Page>
  );
};

export default NotFoundPage;
