import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <Page title="Contact">
      <PageHeader title="[Contact.]" />
      <main className="py-8">
        <p>
          If you are interested in contacting me for professional stuff, you can reach me at{" "}
          <a
            href="mailto:hounie.guilhermo@gmail.com"
            className="font-semibold text-orange-400 underline"
          >
            my email
          </a>{" "}
          <span role="img" aria-label="Wink Emoji">
            😉
          </span>
        </p>
      </main>
    </Page>
  );
};

export default ContactPage;
