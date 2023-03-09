import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FormItem } from "../components/FormItem";

export const ItemFormPage = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Title level={3}>Item</Title>
      <FormItem />
    </Space>
  );
};
