import { Form, Input } from "antd";

export const InputPhone = () => {
  return (
    <Form.Item name="phone" label="Phone number" hasFeedback>
      <Input placeholder="Ex: (591)-72873363" />
    </Form.Item>
  );
};
