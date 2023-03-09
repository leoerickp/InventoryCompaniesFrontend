import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { useHandlePopConfirmEvents } from "../hooks/useHandlePopConfirmEvents";

export const ButtonDelete = ({ deleteCallBack, isLoading }: any) => {
  const { confirm, handleCancel, open, showPopconfirm, handleOpenChange } =
    useHandlePopConfirmEvents(deleteCallBack);
  return (
    <Popconfirm
      placement="topRight"
      title="Are you sure to delete this record?"
      description="Delete record"
      onConfirm={confirm}
      onCancel={handleCancel}
      open={open}
      okButtonProps={{ loading: isLoading }}
      onOpenChange={handleOpenChange}
      okText="Yes"
      cancelText="No"
    >
      <Button
        icon={<DeleteOutlined />}
        type="default"
        onClick={showPopconfirm}
      />
    </Popconfirm>
  );
};
