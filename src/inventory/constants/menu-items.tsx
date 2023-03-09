import { HomeOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

export const mainItems: MenuProps["items"] = [
  {
    label: "Companies",
    key: "companies",
    icon: <HomeOutlined />,
  },
  {
    label: "Users",
    key: "users",
    icon: <UsergroupAddOutlined />,
  },
  {
    label: (
      <a href="https://leoerickp.cf/" target="_blank" rel="noopener noreferrer">
        About me
      </a>
    ),
    key: "leoerickp",
  },
];
