import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import {
  FaBook,
  FaEnvelopeOpenText,
  FaFileContract,
  FaGithub,
  FaHome,
  FaKeyboard,
  FaMoon,
  FaPenAlt,
  FaSun,
} from "react-icons/fa";

export const Dock: FC = () => {
  return (
    <footer className="fixed z-10 flex items-end justify-center bottom-8 inset-x-4">
      <ul className="flex gap-2 px-4 py-2 overflow-x-scroll bg-white border border-gray-400 rounded-3xl bg-opacity-60 backdrop-blur-sm dark:bg-beaver-900 dark:border-gray-800">
        <li>
          <DockLink href="/" label="homepage">
            <FaHome size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/articles" label="articles">
            <FaPenAlt size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="/projects" label="projects">
            <FaKeyboard size={24} />
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
          <DockLink href="/contact" label="contact">
            <FaEnvelopeOpenText size={24} />
          </DockLink>
        </li>
        <li>
          <DockLink href="https://github.com/guilhermohounie" label="github" isExternal>
            <FaGithub size={24} />
          </DockLink>
        </li>
        <li>
          <DockThemeButton />
        </li>
      </ul>
    </footer>
  );
};

const dockItemClassName =
  "block p-2 text-gray-600 transition duration-300 ease-in-out bg-gray-200 rounded-xl hover:scale-110 dark:bg-beaver-800 w-10 h-10 flex items-center justify-center";

interface DockLinkProps {
  isExternal?: boolean;
  href: string;
  label: string;
}

const DockLink: FC<DockLinkProps> = ({ href, isExternal = false, children, label }) => {
  if (isExternal) {
    return (
      <a
        aria-label={label}
        className={dockItemClassName}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a aria-label={label} className={dockItemClassName}>
        {children}
      </a>
    </Link>
  );
};

const DockThemeButton: FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button onClick={toggleTheme} className={dockItemClassName}>
      {mounted && theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
};
