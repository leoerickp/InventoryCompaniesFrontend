import { PlusCircleOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export const ButtonNew = ({ tooltipMessage, createEvent }: any) => {
  return (
    <FloatButton
      type="primary"
      icon={<PlusCircleOutlined />}
      tooltip={<div>{tooltipMessage}</div>}
      onClick={createEvent}
    />
  );
};
