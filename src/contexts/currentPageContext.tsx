"use client";

import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface CurrentPageContextProps {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const CurrentPageContext = createContext<CurrentPageContextProps | undefined>(
  undefined,
);

export const CurrentPageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(
    window.location.pathname.split("/")[1] || "",
  );

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
