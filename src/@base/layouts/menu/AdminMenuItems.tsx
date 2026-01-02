import { paths } from "@/@libs/constants/paths";
import { Menu } from "antd";
import Link from "next/link";
import { CgProductHunt, CgShoppingCart } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
interface IProps {
  defaultSelectedKeys: string[];
  openedMenuKeys?: string[];
  onOpenChange?: (openKeys: string[]) => void;
}
const AdminMenuItems:React.FC<IProps>=({
  defaultSelectedKeys,
  openedMenuKeys,
  onOpenChange,
})=> {
  //   const onOpenChange = () => {
  //     console.log();
  //   };
  return (
    <Menu
      //theme="dark"
      mode="inline"
      className="[&_.ant-menu-item]:text-black! [&_.ant-menu-item-selected]:text-(--primary-color-500)! [&_.ant-menu-item]:text-md font-semibold [&_.ant-menu-item-selected]:bg-(--primary-color-100)! "
      defaultSelectedKeys={defaultSelectedKeys}
      openKeys={openedMenuKeys}
      onOpenChange={onOpenChange}
      items={[
        {
          key: paths.admin.root,
          icon: <MdDashboard className="h-5 w-5" />,
          label: <Link href={`${paths?.admin?.root}`}>OverView</Link>,
        },
        {
          key: paths.admin.product.list,
          icon: <CgShoppingCart className="h-5 w-5" />,
          label: (
            <Link href={`${paths?.admin?.product?.list}`}>All Products</Link>
          ),
        },
        {
          key: paths.admin.product.add,
          icon: <CgProductHunt className="h-5 w-5" />,
          label: (
            <Link href={`${paths?.admin?.product?.add}`}>Add Products</Link>
          ),
        },
      ]}
    />
  );
}
export default AdminMenuItems;