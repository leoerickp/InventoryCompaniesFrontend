import { TableProps } from "antd";
import { UserDataType } from "../interfaces/user-data-type.interface";

export const usersTableProps: TableProps<UserDataType> = {
  expandable: { fixed: true },
  //scroll: { x: true, y: 490 },
  showHeader: true,
  rowClassName: "row-class",
};
