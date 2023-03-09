import { Form } from "antd";
import { ButtonSend } from "./ButtonSend";
import { InputAddress } from "./InputAddress";
import { InputCompanyName } from "./InputCompanyName";
import { InputNIT } from "./InputNIT";
import { InputPhone } from "./InputPhone";
import { useHandleFormCompanyData } from "../hooks/useHandleFormCompanyData";
import { formItemLayout } from "../constants/form-item-layout";

export const FormCompany = () => {
  const { onFinish, initialValues } = useHandleFormCompanyData();
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
      <InputNIT disabled={!!initialValues} />
      <InputCompanyName />
      <InputAddress />
      <InputPhone />
      <ButtonSend />
    </Form>
  );
};
