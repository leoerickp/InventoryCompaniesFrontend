import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FormUser } from "../components/FormUser";

export const UserFormPage = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Title level={3}>User</Title>
      <FormUser />
    </Space>
  );
};
