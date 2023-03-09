import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useSelector } from "react-redux";

export const AvatarUser = () => {
  const { userData } = useSelector((state: any) => state.auth);

  return (
    <Space>
      <Avatar
        shape="square"
        size="default"
        icon={<UserOutlined />}
        src={userData.user.urlPhoto || ""}
      />
      {userData.user.email}
    </Space>
  );
};
