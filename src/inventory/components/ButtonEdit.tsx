import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const ButtonEdit = ({ formPath }: any) => {
  const navigate = useNavigate();
  const sendToForm = () => {
    navigate(formPath);
  };
  return <Button icon={<EditOutlined />} type="default" onClick={sendToForm} />;
};
