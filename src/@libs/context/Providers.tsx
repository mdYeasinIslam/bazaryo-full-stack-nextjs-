"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect } from "react";
import { queryClient } from "../config/reactQuery";
import { storage } from "../utils/storage";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  // useEffect(() => {
  //   const token = storage.getData("token") ?? null;
  //   if (!token) {
  //     window.location.replace("/");
  //   }
  // }, []);
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Fragment>
  );
};
export default Providers;
