import { Form, Input } from "antd";

export const InputCompanyName = () => {
  return (
    <Form.Item
      name="companyName"
      label="Company name"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please input your company name!",
        },
      ]}
    >
      <Input placeholder="Ex: Apple" />
    </Form.Item>
  );
};
