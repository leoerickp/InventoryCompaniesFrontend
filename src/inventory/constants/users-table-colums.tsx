import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { ActionsBarUser } from "../components/ActionsBarUser";
import { UserDataType } from "../interfaces/user-data-type.interface";

export const usersTableColumns: ColumnsType<UserDataType> = [
  {
    title: "Email",
    dataIndex: "email",
    responsive: ["sm"],
    width: "30%",
    sorter: (a, b) => {
      if (a.id >= b.id) return 1;
      return -1;
    },
  },
  {
    title: "Full name",
    dataIndex: "fullName",
    sorter: (a, b) => {
      if (a.fullName >= b.fullName) return 1;
      return -1;
    },
    width: "45%",
  },
  {
    title: "User type",
    dataIndex: "userType",
    responsive: ["sm"],
    width: "25%",
  },
  {
    title: "Active",
    dataIndex: "isActive",
    responsive: ["sm"],
    width: "25%",
    render: (text: any, record: UserDataType, index: number) =>
      text ? <LikeOutlined /> : <DislikeOutlined />,
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
    render: (text: any, record: UserDataType, index: number) => (
      <ActionsBarUser record={record} />
    ),
  },
];
