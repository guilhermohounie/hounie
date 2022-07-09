import { Page } from "@/components/common/Page";
import type { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <Page title="The server died.">
      <main>
        <h3>Welp, try reloading the page?</h3>
      </main>
    </Page>
  );
};

export default NotFoundPage;
