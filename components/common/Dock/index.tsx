import Link from "next/link";
import type { FC } from "react";
import {
  FaArchive,
  FaBook,
  FaEnvelopeOpenText,
  FaFileContract,
  FaGithub,
  FaHome,
  FaPenAlt,
} from "react-icons/fa";

export const Dock: FC = () => {
  return (
    <footer className="fixed z-10 flex items-end justify-center bottom-8 inset-x-4">
      <ul className="flex gap-4 px-4 py-2 overflow-x-scroll bg-transparent border border-gray-400 rounded-3xl bg-opacity-60 backdrop-blur-sm">
        <li>
          <DockLink href="/" label="homepage">
            <FaHome size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/writings" label="writings">
            <FaPenAlt size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/projects" label="projects">
            <FaArchive size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/dictionary" label="dictionary">
            <FaBook size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink
            href="https://guilhermohounie.notion.site/Curr-culo-06a3c33245b243398acdbab7a88462cb"
            isExternal
            label="cv"
          >
            <FaFileContract size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="mailto:contact@hounie.me" label="contact" isExternal>
            <FaEnvelopeOpenText size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="https://github.com/guilhermohounie" label="github" isExternal>
            <FaGithub size={24} />
          </DockLink>
        </li>
      </ul>
    </footer>
  );
};

interface DockLinkProps {
  isExternal?: boolean;
  href: string;
  label: string;
}

const DockLink: FC<DockLinkProps> = ({ href, isExternal = false, children, label }) => {
  const className =
    "block p-2 text-gray-600 transition duration-300 ease-in-out bg-gray-200 rounded-xl hover:scale-110";

  if (isExternal) {
    return (
      <a aria-label={label} className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a aria-label={label} className={className}>
        {children}
      </a>
    </Link>
  );
};
