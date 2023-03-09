import { Form, Switch } from "antd";

export const InputActive = ({ defaultChecked }: any) => {
  return (
    <Form.Item name="isActive" label="Status:">
      <Switch
        checkedChildren="Active"
        unCheckedChildren="Inactive"
        defaultChecked={defaultChecked}
      />
    </Form.Item>
  );
};
