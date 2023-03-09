import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, MenuProps } from "antd";
import { AvatarUser } from "../components/AvatarUser";

export const userItems: MenuProps["items"] = [
  {
    label: <AvatarUser />,
    key: "SubMenu",
    children: [
      {
        label: "Profile",
        key: "profile",
        icon: <ProfileOutlined />,
      },
      { type: "divider", style: { backgroundColor: "rgba(255,225,255,0.3)" } },
      {
        label: "Log out",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ],
  },
];
