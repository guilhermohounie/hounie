import { Dock } from "@/components/common/Dock";
import type { FC, ReactNode } from "react";

interface LayouProps {
  children: ReactNode;
}

export const Layout: FC<LayouProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col max-w-screen-md min-h-screen px-4 pt-16 mx-auto">
      <div className="flex flex-col flex-1 pb-32">{children}</div>
      <Dock />
    </div>
  );
};
