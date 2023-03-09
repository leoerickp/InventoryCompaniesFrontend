import { Form, InputNumber } from "antd";

export const InputAmount = () => {
  return (
    <Form.Item
      name="amount"
      label="Amount"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Please input amount!",
        },
      ]}
    >
      <InputNumber min={0} defaultValue={0} />
    </Form.Item>
  );
};
