import { SendOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

export const ButtonSend = () => {
  return (
    <Space style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      <Button type="primary" icon={<SendOutlined />} htmlType="submit">
        Send
      </Button>
    </Space>
  );
};
