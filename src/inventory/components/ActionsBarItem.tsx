import { Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import { ItemDataType } from "../interfaces/item-data-type.interface";
import { removeItem } from "../../store/slices/items/thunks";

export const ActionsBarItem = ({ record }: any) => {
  const { isLoading } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const deleteItem = () => {
    const { id } = record as ItemDataType;
    dispatch(removeItem(id));
  };

  return (
    <Space size="small">
      <ButtonEdit formPath={`/items/edit/${record.id}`} />
      <ButtonDelete deleteCallBack={deleteItem} isLoading={isLoading} />
    </Space>
  );
};
