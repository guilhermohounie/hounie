import type { FC } from "react";

interface WordProps {
  word: string;
  meaning: string;
  source: string;
}

export const Word: FC<WordProps> = ({ word, source, meaning }) => {
  return (
    <li className="p-4 border-l-2 border-black border-dashed">
      <a href={source} className="text-xl underline" target="_blank" rel="noreferrer">
        {word}
      </a>
      <p className="text-gray-700">{meaning}</p>
    </li>
  );
};
