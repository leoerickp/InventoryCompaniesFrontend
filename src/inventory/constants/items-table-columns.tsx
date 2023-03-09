import { ColumnsType } from "antd/es/table";
import { ItemDataType } from "../interfaces/item-data-type.interface";
import { format, parseISO } from "date-fns";
import { ActionsBarItem } from "../components/ActionsBarItem";

export const itemsTableColumns: ColumnsType<ItemDataType> = [
  {
    title: "Item name",
    dataIndex: "itemName",
    width: "45%",
    sorter: (a, b) => {
      if (a.itemName >= b.itemName) return 1;
      return -1;
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    responsive: ["sm"],
    width: "30%",
  },
  {
    title: "Create date",
    dataIndex: "createdAt",
    responsive: ["sm"],
    width: "25%",
    render: (text, record) => format(parseISO(text), "MM-dd-yyyy hh:mm:ss"),
  },
  {
    title: "Update date",
    dataIndex: "updatedAt",
    responsive: ["sm"],
    width: "25%",
    render: (text, record) => format(parseISO(text), "MM-dd-yyyy hh:mm:ss"),
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
    render: (text: any, record: ItemDataType, index: number) => (
      <ActionsBarItem record={record} />
    ),
  },
];
