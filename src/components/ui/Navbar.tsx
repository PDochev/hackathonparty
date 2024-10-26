import { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <div
      role="presentation"
      className="w-full h-20 shadow-sm flex flex-row justify-end border-b gap-2"
    >
      {children}
    </div>
  );
}

export default Navbar;
