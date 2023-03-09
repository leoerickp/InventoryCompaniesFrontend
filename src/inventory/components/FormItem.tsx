import { Form } from "antd";
import { useParams } from "react-router-dom";
import { formItemLayout } from "../constants/form-item-layout";
import { useHandleFormItemData } from "../hooks/useHandleFormItemData";
import { ButtonSend } from "./ButtonSend";
import { InputAmount } from "./InputAmount";
import { InputItemName } from "./InputItemName";

export const FormItem = () => {
  const { NIT } = useParams();
  const { onFinish, initialValues } = useHandleFormItemData(NIT as string);
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
      <InputItemName />
      <InputAmount />
      <ButtonSend />
    </Form>
  );
};
