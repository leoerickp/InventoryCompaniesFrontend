import { Form, Select } from "antd";

export const InputUserType = () => {
  return (
    <Form.Item
      label="User type:"
      name="userType"
      rules={[
        {
          required: true,
          message: "Please input User type!",
        },
      ]}
    >
      <Select
        defaultValue="user"
        style={{ width: 120 }}
        //onChange={handleChange}
        options={[
          { value: "user", label: "User" },
          { value: "admin", label: "Admin" },
        ]}
      />
    </Form.Item>
  );
};
