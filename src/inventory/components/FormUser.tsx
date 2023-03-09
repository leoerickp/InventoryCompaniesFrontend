import { Form } from "antd";
import { InputEmail } from "../../auth/components/InputEmail";
import { InputFullName } from "../../auth/components/InputFullName";
import { formItemLayout } from "../constants/form-item-layout";
import { useHandleFormUserData } from "../hooks/useHandleFormUserData";
import { ButtonSend } from "./ButtonSend";
import { InputActive } from "./InputActive";
import { InputUserType } from "./InputUserType";

export const FormUser = () => {
  const { onFinish, initialValues } = useHandleFormUserData();
  const [form] = Form.useForm();
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={initialValues}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <InputFullName />
      <InputEmail />
      <InputActive defaultChecked={initialValues?.isActive || false} />
      <InputUserType />
      <ButtonSend />
    </Form>
  );
};
