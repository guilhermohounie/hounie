import { Page } from "@/components/common/Page";
import type { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <Page title="The server died.">
      <h3>Welp, try reloading the page?</h3>
    </Page>
  );
};

export default NotFoundPage;
