import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FormCompany } from "../components/FormCompany";

export const CompanyFormPage = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Title level={3}>Company</Title>
      <FormCompany />
    </Space>
  );
};
