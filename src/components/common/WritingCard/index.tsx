import { WritingMetadata } from "@/types/mdx";
import NextLink from "next/link";
import type { FC } from "react";

interface WritingCardProps {
  writing: WritingMetadata;
}

export const WritingCard: FC<WritingCardProps> = ({ writing }) => {
  const { title, description, date, slug } = writing;
  return (
    <li className="p-4 border-l-2 border-white border-dashed">
      <span className="text-sm text-gray-600">{date}</span>
      <h4>
        <NextLink href={`/writings/${slug}`} className="underline">
          {title}
        </NextLink>
      </h4>
      <p>{description}</p>
    </li>
  );
};
