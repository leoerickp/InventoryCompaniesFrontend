import { Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonEdit } from "./ButtonEdit";
import { removeCompany } from "../../store/slices/companies/thunks";
import { CompanyDataType } from "../interfaces/company-data-type.interface";

export const ActionsBarCompany = ({ record }: any) => {
  const { isLoading } = useSelector((state: any) => state.companies);
  const dispatch = useDispatch();
  const deleteCompany = () => {
    const { NIT } = record as CompanyDataType;
    dispatch(removeCompany(NIT));
  };

  return (
    <Space size="small">
      <ButtonEdit formPath={`/companies/edit/${record.NIT}`} />
      <ButtonDelete deleteCallBack={deleteCompany} isLoading={isLoading} />
    </Space>
  );
};
