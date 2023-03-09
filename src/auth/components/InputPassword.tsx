import { Form, Input } from "antd";

export const InputPassword = () => {
  return (
    <Form.Item
      label="Password:"
      name="password"
      rules={[
        {
          min: 6,
          message: "Min lengh required is 6 characters",
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>
  );
};
