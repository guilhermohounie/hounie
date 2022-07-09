import { Page } from "@/components/common/Page";
import type { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <Page title="Nothing to see here.">
      <main>
        <h3>There is nothing to see here.</h3>
      </main>
    </Page>
  );
};

export default NotFoundPage;
