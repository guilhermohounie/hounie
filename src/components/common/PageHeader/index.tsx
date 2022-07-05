import type { FC } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="flex flex-col gap-2">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
};
