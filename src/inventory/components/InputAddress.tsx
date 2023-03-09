import { Form, Input } from "antd";

export const InputAddress = () => {
  return (
    <Form.Item
      name="address"
      label="Address:"
      rules={[
        {
          required: true,
          message: "Please input your company address!",
        },
      ]}
    >
      <Input.TextArea rows={6} showCount maxLength={255} />
    </Form.Item>
  );
};
