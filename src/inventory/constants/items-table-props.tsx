import { TableProps } from "antd";
import { ItemDataType } from "../interfaces/item-data-type.interface";

export const itemsTableProps: TableProps<ItemDataType> = {
  expandable: { fixed: true },
  //scroll: { x: true, y: 490 },
  showHeader: true,
  rowClassName: "row-class",
};
