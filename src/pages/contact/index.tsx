import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <Page title="Contato">
      <PageHeader title="[Entre em contato.]" />
      <main className="py-8">
        <p>
          Se você tem interesse em me contatar para coisas profissionais, pode me alcançar em{" "}
          <a
            href="mailto:hounie.guilhermo@gmail.com"
            className="font-semibold underline text-orange-400"
          >
            meu e-mail
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
