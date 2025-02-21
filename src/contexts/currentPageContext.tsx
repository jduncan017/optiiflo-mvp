"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
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
  const [currentPage, setCurrentPage] = useState("Dashboard");
  const searchParams = useSearchParams();

  // useEffect(() => {
  //   const pageRoute = searchParams.get("currentPage");
  //   if (pageRoute) {
  //     setCurrentPage(pageRoute);
  //   }
  // }, [searchParams]);

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
