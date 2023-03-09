import { Form, message } from "antd";
import { InputEmail } from "../../auth/components/InputEmail";
import { InputFullName } from "../../auth/components/InputFullName";
import { InputPassword } from "../../auth/components/InputPassword";
import { formItemLayout } from "../constants/form-item-layout";
import { useHandleUserActions } from "../hooks/useHandleUserActions";
import { ButtonSend } from "./ButtonSend";
import { InputConfirmPassword } from "./InputConfirmPassword";
import { InputUrlPhoto } from "./InputUrlPhoto";

export const FormProfile = () => {
  const { userData, updateUserData } = useHandleUserActions();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    delete values.confirm;
    if (!values.password) {
      delete values.password;
    }
    if (!values.urlPhoto) {
      delete values.urlPhoto;
    }
    updateUserData(userData.user.id, values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={userData.user}
      style={{ maxWidth: 800 }}
      scrollToFirstError
    >
      <InputFullName />
      <InputEmail />
      <InputPassword />
      <InputConfirmPassword />
      <InputUrlPhoto />
      <ButtonSend />
    </Form>
  );
};
