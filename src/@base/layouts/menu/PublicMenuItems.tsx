import { paths } from "@/@libs/constants/paths";
import { ConfigProvider, Menu, MenuProps } from "antd";
import Link from "next/link";
interface IProps {
  defaultSelectedKeys?: string[];
  openedMenuKeys?: string[];
  onOpenChange?: (openKeys: string[]) => void;
}

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "Electronics",
    // icon: <FcElectronics />,
    label: (
      <Link href={`${paths.publicRoot.products.electronics}`}>Electronics</Link>
    ),
    children: [
      {
        key: "Electronics-1",
        label: "Drone",
      },
      {
        key: "Electronics-2",
        label: "Light",
      },
    ],
  },
  {
    key: "Mobile Accessories",
    // icon: <AppstoreOutlined />,
    label: (
      <Link href={`${paths.publicRoot.products.mobile_accessories}`}>
        Mobile Accessories
      </Link>
    ),
    children: [
      {
        key: "1",
        label: "Smart Watch",
      },
      {
        key: "2",
        label: "Neckband",
      },
      {
        key: "3",
        label: "Wireless Headphone",
      },
      {
        key: "4",
        label: "Speaker",
      },
    ],
  },

  {
    key: "Computer Accessories",
    // icon: <AppstoreOutlined />,
    label: (
      <Link href={`${paths.publicRoot.products.computer_accessories}`}>
        Computer Accessories
      </Link>
    ),
    children: [
      {
        key: "Computer-1",
        label: "Mouse & Keyboard",
      },
      {
        key: "Computer-2",
        label: "Pen Drive",
      },
      {
        key: "Computer-3",
        label: "HDD & SSD",
      },
      {
        key: "Computer-4",
        label: "Webcam",
      },
    ],
  },
  {
    key: "Lifestyle",
    // icon: <AppstoreOutlined />,
    label: (
      <Link href={`${paths.publicRoot.products.computer_accessories}`}>
        Lifestyle
      </Link>
    ),
    children: [
      {
        key: "Lifestyle-1",
        label: "Men's Watches",
      },
      {
        key: "Lifestyle-2",
        label: "Women's Watches",
      },
      {
        key: "Lifestyle-3",
        label: "Hair Dryers",
      },
      {
        key: "Lifestyle-4",
        label: "Gift Set",
      },
    ],
  },
];
const PublicMenuItems: React.FC<IProps> = ({
  defaultSelectedKeys,
  openedMenuKeys,
  onOpenChange,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverBg: "var(--primary-color-100)",
            itemColor: "black",
          },
        },
      }}
    >
      <Menu
        //theme="dark"
        mode="vertical"
        className="text-black! [&_.ant-menu-item]:text-black! [&_.ant-menu-item-selected]:text-(--primary-color-500)! [&_.ant-menu-item]:text-md font-semibold [&_.ant-menu-item-selected]:bg-(--primary-color-100)!"
        defaultSelectedKeys={defaultSelectedKeys}
        openKeys={openedMenuKeys}
        onOpenChange={onOpenChange}
        //   items={[
        //     {
        //       key: paths.publicRoot.products.electronics,
        //       icon: <MdDashboard className="h-5 w-5" />,
        //       label: (
        //         <Link href={`${paths.publicRoot.products.electronics}`}>
        //           OverView
        //         </Link>
        //       ),
        //     },
        //     {
        //       key: paths.publicRoot.products.mobile_accessories,
        //       icon: <CgShoppingCart className="h-5 w-5" />,
        //       label: (
        //         <Link href={`${paths.publicRoot.products.mobile_accessories}`}>
        //           All Products
        //         </Link>
        //       ),
        //     },
        //     {
        //       key: paths.publicRoot.products.computer_accessories,
        //       icon: <CgProductHunt className="h-5 w-5" />,
        //       label: (
        //         <Link href={`${paths.publicRoot.products.computer_accessories}`}>
        //           Add Products
        //         </Link>
        //       ),
        //     },
        //     {
        //       key: paths.publicRoot.products.lifestyle,
        //       icon: <CgProductHunt className="h-5 w-5" />,
        //       label: (
        //         <Link href={`${paths.publicRoot.products.lifestyle}`}>
        //           Add Products
        //         </Link>
        //       ),
        //     },
        //   ]}
        items={items}
        rootClassName="text-black!"
      />
    </ConfigProvider>
  );
};
export default PublicMenuItems;
