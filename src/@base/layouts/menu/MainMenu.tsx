import { paths } from '@/@libs/constants/paths';
import { Menu } from 'antd';
import { CgProductHunt, CgShoppingCart } from 'react-icons/cg';
import { MdDashboard } from 'react-icons/md';
interface IProp{
    defaultSelectedKeys: string[];
    openedMenuKeys?: string[];
    onOpenChange?:(openKeys:string[])=>void
}

export default function MainMenu({defaultSelectedKeys,openedMenuKeys,onOpenChange}:IProp) {
  return (
    <Menu
      //theme="dark"
      mode="inline"
      className="[&_.ant-menu-item]:text-black! [&_.ant-menu-item-selected]:text-(--primary-color-600)! [&_.ant-menu-item]:text-md font-semibold [&_.ant-menu-item-selected]:bg-(--primary-color-100)! "
      defaultSelectedKeys={defaultSelectedKeys}
      openKeys={openedMenuKeys}
      onOpenChange={onOpenChange}
      items={[
        {
          key: paths.admin.root,
          icon: <MdDashboard className="h-5 w-5" />,
          label: "OverView",
        },
        {
          key: paths.admin.product.list,
          icon: <CgShoppingCart className="h-5 w-5" />,
          label: "All Products",
        },
        {
          key: paths.admin.product.add,
          icon: <CgProductHunt className="h-5 w-5" />,
          label: "Add Product",
        },
      ]}
    />
  );
}
