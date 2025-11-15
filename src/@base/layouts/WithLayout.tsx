import React, { PropsWithChildren } from "react";
import AdminLayout from "./AdminLayout";

const WithLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <AdminLayout>{children}</AdminLayout>;
};
export default WithLayout