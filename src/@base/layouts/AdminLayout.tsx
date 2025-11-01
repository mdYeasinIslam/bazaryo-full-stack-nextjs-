"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import { paths } from "@/@libs/constants/paths";
import { FaUser } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";
import MainMenu from "./menu/MainMenu";
// import logo from "/logo.png";

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const pathName = usePathname()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
   const styles: any = {
     header: {
       position: "relative",
       right: 0,
       width: "100%",
       height: "auto",
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
      //  background: "#fff",
       
       paddingInline: "1rem",
       zIndex: 99,
       paddingTop: 20,
       paddingBottom: 20,
       background: colorBgContainer,
     },
     //  sider: {
     //    position: "fixed",
     //    top: headerHeight,
     //    left: !screens.md && isCollapsed ? "-100%" : 0,
     //    paddingLeft: screens.md ? 16 : 0,
     //    height: `calc(100vh - ${headerHeight}px)`,
     //    background: isLight ? "#fff" : "#1f1f1f",
     //    zIndex: 100,
     //  },
     //  menuWrapper: {
     //    display: "flex",
     //    flexDirection: "column",
     //    height: "100%",
     //    paddingBlock: 32,
     //    overflowY: "auto",
     //  },
     //  layout: {
     //    background: isLight ? "#fff" : "#1f1f1f",
     //    paddingLeft: !screens.md ? 0 : isCollapsed ? 100 : 220,
     //  },
     //  content: {
     //    paddingTop: headerHeight + 10,
     //    paddingBottom: `calc(32px + ${footerHeight}px)`,
     //  },
     //  footer: {
     //    position: "fixed",
     //    left: 0,
     //    bottom: 0,
     //    width: "100%",
     //    textAlign: "center",
     //    paddingBlock: 16,
     //    paddingLeft: !screens.md ? 0 : isCollapsed ? 100 : 300,
     //    background: isLight ? "#fff" : "#1f1f1f",
     //  },
   };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header style={styles.header}>
        <div
          className={`demo-logo-vertical  flex justify-between  items-center  gap-10 ${
            collapsed ? "" : "   rounded-md"
          }  `}
        >
          <Link
            href={paths?.admin?.root}
            className="h-full w-full flex items-center"
          >
            <Image
              src="/logo.png"
              alt="shop logo"
              width={500}
              height={500}
              className="w-8 h-8"
            />
            <h2
              className={`ml-2 text-2xl font-bold text-(--primary-color-900) duration-300 hover:text-(--primary-color-800)  ${
                collapsed ? "hidden" : "flex"
              }`}
            >
              Bazaryo
            </h2>
          </Link>
          <Button type="text" onClick={() => setCollapsed(!collapsed)}>
            <MdOutlineKeyboardDoubleArrowRight
              size={24}
              className={collapsed ? "rotate-0" : "rotate-180"}
            />
          </Button>
        </div>
        <div>
          <FaUser />
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            backgroundColor: "var(--background)",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
          onCollapse={(value) => setCollapsed(value)}
        >
          <MainMenu defaultSelectedKeys={[pathName]} />
        </Layout.Sider>
        <Layout.Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
