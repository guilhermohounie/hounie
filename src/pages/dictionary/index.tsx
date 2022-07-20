import { Page } from "@/components/common/Page";
import { Word } from "@/components/common/Word";
import dictionary from "@/data/dictionary.json";
import type { NextPage } from "next";

const DictionaryPage: NextPage = () => {
  return (
    <Page title="Dictionary" header={{ title: "[Dictionary.]" }}>
      <main className="py-8">
        <ul className="grid gap-8 md:grid-cols-2">
          {dictionary.map((entry) => {
            return (
              <li key={entry.word}>
                <Word {...entry} />
              </li>
            );
          })}
        </ul>
      </main>
    </Page>
  );
};

export default DictionaryPage;
