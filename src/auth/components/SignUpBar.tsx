import { Space } from "antd";
import { Link } from "react-router-dom";

export const SignUpBar = () => {
  return (
    <Space
      align="start"
      direction="horizontal"
      style={{ width: "100%", justifyContent: "space-between" }}
    >
      <p style={{ margin: 0 }}>Register now...</p>
      <Link to="/auth/signup">Sign up</Link>
    </Space>
  );
};
