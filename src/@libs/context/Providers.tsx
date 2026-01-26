"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect } from "react";
import { queryClient } from "../config/reactQuery";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
   
 },[])
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Fragment>
  );
};
export default Providers;
