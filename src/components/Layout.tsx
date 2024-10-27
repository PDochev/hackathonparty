import { ReactNode } from "react";
import { Header } from "./ui/Header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <div className="h-20"></div>
    </>
  );
}
