import { Writing } from ".contentlayer/generated/types";
import { formatDate } from "@/lib/date";
import NextLink from "next/link";
import type { FC } from "react";

interface WritingCardProps {
  writing: Writing;
}

export const WritingCard: FC<WritingCardProps> = ({ writing }) => {
  const { title, description, date, slug } = writing;
  return (
    <div className="p-4 border-l-2 border-white border-dashed">
      <span className="text-sm text-gray-600">{formatDate(date)}</span>
      <h4>
        <NextLink href={slug} className="underline">
          {title}
        </NextLink>
      </h4>
      <p>{description}</p>
    </div>
  );
};
