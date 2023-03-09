import { Form, Input } from "antd";

export const InputNIT = ({ disabled }: any) => {
  return (
    <Form.Item
      name="NIT"
      label="NIT"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please input NIT!",
        },
      ]}
    >
      <Input disabled={disabled} />
    </Form.Item>
  );
};
