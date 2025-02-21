"use client";

import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
interface CurrentPageContextProps {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const CurrentPageContext = createContext<CurrentPageContextProps | undefined>(
  undefined,
);

export const CurrentPageProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const pageRoute = searchParams.get("currentPage") ?? "My Week";
  const [currentPage, setCurrentPage] = useState(pageRoute);

  return (
    <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPage = () => {
  const context = useContext(CurrentPageContext);
  if (!context) {
    throw new Error("useCurrentPage must be used within a CurrentPageProvider");
  }
  return context;
};
