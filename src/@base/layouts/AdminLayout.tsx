"use client";
import React, { useState } from "react";

import { Button, Grid, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { paths } from "@/@libs/constants/paths";
import { FaUser } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import MainMenu from "./menu/MainMenu";
import useResize from "@/@libs/hooks/useResize";
// import logo from "/logo.png";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const pathName = usePathname();
  const { elemRef: headerRef, height: headerHeight } = useResize();
  const screenSize = Grid.useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(headerHeight);
  const styles: any = {
    header: {
      position: "fixed",
      right: 0,
      width: "100%",
      height: "auto",
      display: "flex",
      alignItems: "center",
      // justifyContent: "space-between",
      // background: isLight ? "#fff" : "#1f1f1f",
      background: "#fff",
      gap: "1rem",
      paddingInline: collapsed ? "2rem" : "3rem",
      paddingTop: 10,
      paddingBottom:10,

      zIndex: 99,
    },
    slider: {
      position: "fixed",
      paddingTop: headerHeight * 1.5,
      left: !screenSize.md && collapsed ? "-100%" : 0,
      paddingLeft: screenSize.md ? 16 : 0,
      height: `calc(100vh)`,
      // background: isLight ? "#fff" : "#1f1f1f",
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
      // background: isLight ? "#fff" : "#1f1f1f",
      background: "#F5F5F5",

      paddingLeft: !screenSize.md ? 0 : collapsed ? 100 : 220,
    },
    content: {
      paddingTop: headerHeight * 1.5,
      // paddingBottom: `calc(32px + ${footerHeight}px)`,
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
          <Button
            type="text"
            className=" "
            onClick={() => setCollapsed(!collapsed)}
          >
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
          collapsed={collapsed}
          style={styles.slider}
          onCollapse={(value) => setCollapsed(value)}
        >
          <MainMenu defaultSelectedKeys={[pathName]} />
        </Layout.Sider>
        <Layout.Content style={styles.content}>Content</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
