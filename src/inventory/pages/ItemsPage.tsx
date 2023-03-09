import { Table } from "antd";
import { ButtonNew } from "../components/ButtonNew";
import { useHandlePageMessagesEvent } from "../hooks/useHandlePageMessagesEvent";
import * as itemsSlice from "../../store/slices/items/itemsSlice";
import { getItems } from "../../store/slices/items/thunks";
import { useParams } from "react-router-dom";
import { useHandleItemsDataTableProps } from "../hooks/useHandleItemsDataTableProps";
import { HeaderItem } from "../components/HeaderItem";

export const ItemsPage = () => {
  const { NIT } = useParams();
  const { dynamicTableProps, isAdmin } = useHandleItemsDataTableProps(NIT);
  const { createNewButtonEvent } = useHandlePageMessagesEvent({
    sliceSource: itemsSlice,
    createPath: `/items/create/${NIT}`,
    nameState: "items",
    getData: getItems,
    idParent: NIT,
  });
  return (
    <>
      {isAdmin && (
        <ButtonNew
          tooltipMessage={"Add item"}
          createEvent={createNewButtonEvent}
        />
      )}
      <Table
        {...dynamicTableProps}
        title={() => <HeaderItem />}
        className="animate__animated animate__fadeIn animate_faster"
      />
    </>
  );
};
