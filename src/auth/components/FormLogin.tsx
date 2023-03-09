import { Divider, Form, Spin } from "antd";
import { useHandleAuthActions } from "../hooks/useHandleAuthActions";
import { ButtonLogin } from "./ButtonLogin";
import { InputEmail } from "./InputEmail";
import { InputPassword } from "./InputPassword";
import { SignUpBar } from "./SignUpBar";

export const FormLogin = () => {
  const { isConnecting, authLoginSubmit } = useHandleAuthActions();
  const [form] = Form.useForm();

  return (
    <Spin spinning={isConnecting} delay={500}>
      <Form layout="horizontal" form={form} onFinish={authLoginSubmit}>
        <InputEmail />
        <InputPassword />
        <ButtonLogin />
        <Divider />
        <SignUpBar />
      </Form>
    </Spin>
  );
};
