import { Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import { UserDataType } from "../interfaces/user-data-type.interface";
import { removeUser } from "../../store/slices/users/thunks";

export const ActionsBarUser = ({ record }: any) => {
  const { isLoading } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const deleteUser = () => {
    const { id } = record as UserDataType;
    dispatch(removeUser(id));
  };

  return (
    <Space size="small">
      <ButtonEdit formPath={`/users/edit/${record.id}`} />
      <ButtonDelete deleteCallBack={deleteUser} isLoading={isLoading} />
    </Space>
  );
};
