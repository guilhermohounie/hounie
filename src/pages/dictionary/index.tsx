import { Page } from "@/components/common/Page";
import { PageHeader } from "@/components/common/PageHeader";
import { Word } from "@/components/common/Word";
import dictionary from "@/data/dictionary.json";
import type { NextPage } from "next";

const DictionaryPage: NextPage = () => {
  return (
    <Page title="Dicionário">
      <PageHeader title="[Dicionário.]" />
      <main className="py-8">
        <ul className="grid gap-8 md:grid-cols-2">
          {dictionary.map((entry) => {
            return <Word {...entry} key={entry.word} />;
          })}
        </ul>
      </main>
    </Page>
  );
};

export default DictionaryPage;
