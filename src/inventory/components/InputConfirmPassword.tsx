import { Form, Input } from "antd";

export const InputConfirmPassword = () => {
  return (
    <Form.Item
      name="confirm"
      label="Confirm Password"
      dependencies={["password"]}
      hasFeedback
      rules={[
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error("The two passwords that you entered do not match!")
            );
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>
  );
};
