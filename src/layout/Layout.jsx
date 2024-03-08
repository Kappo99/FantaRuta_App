import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full h-dvh relative pb-8">
      <div className="fixed top-0 left-0 w-full h-1/3 bg-ruta_purple -z-10"></div>
      <Navbar /><main className="pt-20 px-4">
        {children}
      </main>
      <div className="h-10"></div>
    </div>
  );
}
