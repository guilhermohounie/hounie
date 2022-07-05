import { motion } from "framer-motion";
import NextLink from "next/link";
import type { FC, ReactNode } from "react";
import {
  FaBook,
  FaEnvelopeOpenText,
  FaFileContract,
  FaGithub,
  FaHome,
  FaKeyboard,
  FaPencilAlt,
} from "react-icons/fa";

const animation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: (i: number) => {
    return { delay: 0.3 * i, duration: 1 };
  },
};

export const Dock: FC = () => {
  return (
    <footer className="fixed z-10 flex items-end justify-center bottom-8 inset-x-4">
      <motion.ul className="flex gap-2 px-4 py-2 overflow-x-scroll bg-black rounded-3xl bg-opacity-60 backdrop-blur-sm">
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(0.2)}
        >
          <DockLink href="/" label="Home" title="Home">
            <FaHome size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(0.4)}
        >
          <DockLink href="/writings" label="Writings" title="Writings">
            <FaPencilAlt size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(0.6)}
        >
          <DockLink href="/projects" label="Projects" title="Projects">
            <FaKeyboard size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(0.8)}
        >
          <DockLink href="/dictionary" label="Dictionary" title="Dictionary">
            <FaBook size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(1)}
        >
          <DockLink href="/contact" label="Contact" title="Contact">
            <FaEnvelopeOpenText size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(1.2)}
        >
          <DockLink href="/assets/cv.pdf" isExternal label="CV" title="CV">
            <FaFileContract size={24} />
          </DockLink>
        </motion.li>
        <motion.li
          animate={animation.animate}
          initial={animation.initial}
          transition={animation.transition(1.4)}
        >
          <DockLink
            href="https://github.com/guilhermohounie"
            label="Github"
            isExternal
            title="Github (external)"
          >
            <FaGithub size={24} />
          </DockLink>
        </motion.li>
      </motion.ul>
    </footer>
  );
};

const dockItemClassName =
  "block p-2 text-gray-600 transition duration-300 ease-in-out rounded-2xl hover:scale-110 border border-gray-800 w-10 h-10 flex items-center justify-center";

interface DockLinkProps {
  isExternal?: boolean;
  href: string;
  label: string;
  title: string;
  children: ReactNode;
}

const DockLink: FC<DockLinkProps> = ({ href, isExternal = false, children, label, title }) => {
  return (
    <NextLink
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      aria-label={label}
      className={dockItemClassName}
      title={title}
    >
      {children}
    </NextLink>
  );
};
