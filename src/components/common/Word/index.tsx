import type { FC } from "react";

interface WordProps {
  word: string;
  meaning: string;
  source: string;
}

export const Word: FC<WordProps> = ({ word, source, meaning }) => {
  return (
    <li className="p-4 border-l-2 border-black border-dashed dark:border-white">
      <h4>
        <a href={source} className="underline" target="_blank" rel="noreferrer">
          {word}
        </a>
      </h4>
      <p>{meaning}</p>
    </li>
  );
};
