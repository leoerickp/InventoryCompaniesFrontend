import { Table } from "antd";
import { useHandleCompaniesDataTableProps } from "../hooks/useHandleCompaniesDataTableProps";
import { ButtonNew } from "../components/ButtonNew";
import { useHandlePageMessagesEvent } from "../hooks/useHandlePageMessagesEvent";
import * as companiesSlice from "../../store/slices/companies/companiesSlice";
import Title from "antd/es/typography/Title";
import { getCompanies } from "../../store/slices/companies/thunks";

export const CompaniesPage = () => {
  const { dynamicTableProps, isAdmin } = useHandleCompaniesDataTableProps();

  const { createNewButtonEvent } = useHandlePageMessagesEvent({
    sliceSource: companiesSlice,
    createPath: "/companies/create",
    nameState: "companies",
    getData: getCompanies,
  });

  return (
    <>
      {isAdmin && (
        <ButtonNew
          tooltipMessage={"Add company"}
          createEvent={createNewButtonEvent}
        />
      )}

      <Table
        {...dynamicTableProps}
        title={() => <Title level={2}>Companies</Title>}
        className="animate__animated animate__fadeIn animate_faster"
      />
    </>
  );
};
