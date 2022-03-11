import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <Page title="Contact">
      <PageHeader title="[Reach me out.]" />
      <main className="py-8">
        <p>
          If you ever want to contact me for professional stuff you can reach me at{" "}
          <a href="mailto:hounie.guilhermo@gmail.com" className="font-semibold underline">
            my contact email
          </a>{" "}
          <span role="img" aria-label="Wink Emoni">
            😉
          </span>
        </p>
      </main>
    </Page>
  );
};

export default ContactPage;
