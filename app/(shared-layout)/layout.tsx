import { ReactNode } from "react";
import Navbar from "@/components/web/navbar";

export default function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
