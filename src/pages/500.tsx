import { Page } from "@/components/common/Page";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <Page title="The server died.">
      <main>
        <h3>Welp, try reloading the page?</h3>
      </main>
    </Page>
  );
};

export default NotFoundPage;
