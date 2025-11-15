import React from "react";
import AdminLayout from "./AdminLayout";
interface IProp extends React.PropsWithChildren{ }

const WithLayout :React.FC<IProp>=({children})=> {
    return <AdminLayout>
      {children}
  </AdminLayout>;
}
export default WithLayout