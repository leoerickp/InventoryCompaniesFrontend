import { Card } from "antd";
import { FormSignUp } from "../components/FormSignUp";

export const SignUpPage = () => {
  return (
    <Card
      title="Sign up"
      bordered={false}
      className="animate__animated animate__fadeIn animate_faster"
      style={{ width: 350 }}
    >
      <FormSignUp />
    </Card>
  );
};
