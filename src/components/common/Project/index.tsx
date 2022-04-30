import type { FC } from "react";

interface ProjectProps {
  name: string;
  description: string;
  source: string;
}

export const Project: FC<ProjectProps> = ({ name, source, description }) => {
  return (
    <li className="p-4 border-l-2 border-black border-dashed dark:border-white">
      <h4>
        <a href={source} className="underline" target="_blank" rel="noreferrer">
          {name}
        </a>
      </h4>
      <p>{description}</p>
    </li>
  );
};
