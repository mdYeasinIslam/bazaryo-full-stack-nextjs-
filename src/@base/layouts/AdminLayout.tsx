"use client";
import React, { ReactNode, useState } from "react";

import { paths } from "@/@libs/constants/paths";
import useResize from "@/@libs/hooks/useResize";
import { Button, Grid, Layout, theme } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MainMenu from "./menu/MainMenu";
// import logo from "/logo.png";
interface IProp extends React.PropsWithChildren {
  
}
const AdminLayout: React.FC<IProp> = ({children}) => {
  const pathName = usePathname();
  const { elemRef: headerRef, height: headerHeight } = useResize();
  const screenSize = Grid.useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const styles: any = {
    header: {
      position: "fixed",
      right: 0,
      width: "100%",
      height: "auto",
      display: "flex",
      alignItems: "center",
      background: "#fff",
      gap: "1rem",
      paddingInline: collapsed ? "2rem" : "3rem",
      paddingTop: 10,
      paddingBottom: 10,

      zIndex: 99,
    },
    slider: {
      position: "fixed",
      paddingTop: headerHeight * 1.5,
      left: !screenSize.md && collapsed ? "-100%" : 0,
      paddingLeft: screenSize.md ? 16 : 0,
      height: `calc(100vh)`,
      background: "#fff",

      zIndex: 90,
    },
    menuWrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      paddingBlock: 32,
      overflowY: "auto",
    },
    layout: {
      background: "#F5F5F5",
      paddingLeft: !screenSize.md ? 0 : collapsed ? 90 : 220,
      paddingRight: !screenSize.md ? 0 : collapsed ? 20 : 20,
    },
    content: {
      // position:'relative'
      paddingTop: headerHeight + 10,
    },
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header style={styles.header} ref={headerRef}>
        <div className={` flex items-center justify-center `}>
          <Link href={paths?.admin?.root} className="flex justify-end gap-1">
            <Image
              src="/logo.png"
              alt="shop logo"
              width={500}
              height={500}
              className="w-8 h-8"
            />
            <h2
              className={` text-4xl font-bold text-(--primary-color-900)  hover:text-(--primary-color-800)  ${
                collapsed ? "hidden " : "block"
              }`}
            >
              Bazaryo
            </h2>
          </Link>
        </div>
        <div className="w-full  flex items-center justify-between">
          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            <MdOutlineKeyboardDoubleArrowRight
              size={24}
              className={collapsed ? "rotate-0" : "rotate-180"}
            />
          </Button>
          <FaUser />
        </div>
      </Layout.Header>
      <Layout style={styles.layout}>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={screenSize.md && collapsed}
          style={styles?.slider}
          width={200}
          breakpoint="md"
          onBreakpoint={(broken) => {
            if (broken) setCollapsed(true);
          }}
          onCollapse={(value) => setCollapsed(value)}
        >
          <MainMenu defaultSelectedKeys={[pathName]} />
        </Layout.Sider>
        <Layout.Content style={styles.content}>
          {" "}
          <div className=" md:h-full">
            <div className="rounded-3xl bg-[#f5f5f5] md:p-2 md:h-full lg:p-0">
              {children}
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
