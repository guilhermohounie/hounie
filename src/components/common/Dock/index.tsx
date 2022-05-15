import Link from "next/link";
import { FC } from "react";
import {
  FaBook,
  FaEnvelopeOpenText,
  FaFileContract,
  FaGithub,
  FaHome,
  FaKeyboard,
} from "react-icons/fa";

export const Dock: FC = () => {
  return (
    <footer className="fixed z-10 flex items-end justify-center bottom-8 inset-x-4">
      <ul className="flex gap-2 px-4 py-2 overflow-x-scroll rounded-3xl bg-opacity-80 backdrop-blur-sm bg-dark">
        <li>
          <DockLink href="/" label="Home" title="Home">
            <FaHome size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/projects" label="Projects" title="Projects">
            <FaKeyboard size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/dictionary" label="Dictionary" title="Dictionary">
            <FaBook size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/contact" label="Contact" title="Contact">
            <FaEnvelopeOpenText size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/assets/cv.pdf" isExternal label="CV" title="CV">
            <FaFileContract size={24} />
          </DockLink>
        </li>

        <li>
          <DockLink
            href="https://github.com/guilhermohounie"
            label="Github"
            isExternal
            title="Github (external)"
          >
            <FaGithub size={24} />
          </DockLink>
        </li>
      </ul>
    </footer>
  );
};

const dockItemClassName =
  "block p-2 text-gray-600 transition duration-300 ease-in-out rounded-xl hover:scale-110 border border-gray-800 w-10 h-10 flex items-center justify-center";

interface DockLinkProps {
  isExternal?: boolean;
  href: string;
  label: string;
  title: string;
}

const DockLink: FC<DockLinkProps> = ({ href, isExternal = false, children, label, title }) => {
  if (isExternal) {
    return (
      <a
        aria-label={label}
        className={dockItemClassName}
        href={href}
        target="_blank"
        rel="noreferrer"
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a aria-label={label} className={dockItemClassName} title={title}>
        {children}
      </a>
    </Link>
  );
};
