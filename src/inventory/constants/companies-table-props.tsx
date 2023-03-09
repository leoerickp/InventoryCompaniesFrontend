import { TableProps } from "antd";
import { CompanyDataType } from "../interfaces/company-data-type.interface";

export const companiesTableProps: TableProps<CompanyDataType> = {
  expandable: { fixed: true },
  //scroll: { x: true, y: 490 },
  showHeader: true,
  rowClassName: "row-class",
};
