import { Page } from "@components/common/Page";
import { PageHeader } from "@components/common/PageHeader";
import { Word } from "@components/common/Word";
import dictionary from "@data/dictionary.json";
import type { NextPage } from "next";

const DictionaryPage: NextPage = () => {
  return (
    <Page title="Dictionary">
      <PageHeader title="[Dictionary.]" />
      <main>
        <ul className="flex flex-col gap-8 py-8">
          {dictionary.map((entry) => {
            return <Word {...entry} key={entry.word} />;
          })}
        </ul>
      </main>
    </Page>
  );
};

export default DictionaryPage;
