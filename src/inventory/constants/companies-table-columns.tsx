import { ColumnsType } from "antd/es/table";
import { CompanyDataType } from "../interfaces/company-data-type.interface";
import { ActionsBarCompany } from "../components/ActionsBarCompany";
import { NavLink } from "react-router-dom";

export const companiesTableColumns: ColumnsType<CompanyDataType> = [
  {
    title: "NIT",
    dataIndex: "NIT",
    responsive: ["sm"],
    width: "30%",
    sorter: (a, b) => {
      if (a.NIT >= b.NIT) return 1;
      return -1;
    },
  },
  {
    title: "Company Name",
    dataIndex: "companyName",
    render: (text: any, record: CompanyDataType, index: number) => (
      <NavLink to={`/items/${record.NIT}`}>{text}</NavLink>
    ),
    sorter: (a, b) => {
      if (a.companyName >= b.companyName) return 1;
      return -1;
    },
    width: "45%",
  },
  {
    title: "Address",
    dataIndex: "address",
    responsive: ["sm"],
    width: "25%",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    responsive: ["sm"],
    width: "25%",
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
    render: (text: any, record: CompanyDataType, index: number) => (
      <ActionsBarCompany record={record} />
    ),
  },
];
