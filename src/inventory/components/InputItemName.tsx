import { Form, Input } from "antd";

export const InputItemName = () => {
  return (
    <Form.Item
      name="itemName"
      label="Item name"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please input item name!",
        },
      ]}
    >
      <Input placeholder="Ex: Computer" />
    </Form.Item>
  );
};
