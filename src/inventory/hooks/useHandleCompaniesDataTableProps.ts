import { TableProps } from "antd";
import { companiesTableColumns } from "../constants/companies-table-columns";
import { companiesTableProps } from "../constants/companies-table-props";
import { CompanyDataType } from "../interfaces/company-data-type.interface";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCompanies } from "../../store/slices/companies/thunks";
import { useAppContext } from "../../contexts/appcontext/AppContext";


export const useHandleCompaniesDataTableProps = () => {
    const { setCurrentMenuOption } = useAppContext()
    const { isAdmin } = useSelector((state: any) => state.auth);
    const columns = isAdmin ? companiesTableColumns : companiesTableColumns.filter(column => column.key !== 'action');
    const { count: total, isLoading: loading, dataSource } = useSelector((state: any) => state.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentMenuOption('companies');
        dispatch(getCompanies(10, 0));
    }, [])

    const changePage = async (page: number, pageSize: number): Promise<void | undefined> => {
        dispatch(getCompanies(pageSize, pageSize * (page - 1)));
    };

    const dynamicTableProps: TableProps<CompanyDataType> = {
        ...companiesTableProps,
        pagination:
        {
            position: ["bottomRight"],
            total,
            onChange: changePage,
            showTotal: (total: number, range: any) =>
                `${range[0]}-${range[1]} of ${total} companies`,
        },
        columns,
        dataSource: dataSource.map((data: CompanyDataType) => ({ ...data, key: data.NIT })),
        loading,
    }

    return {
        dynamicTableProps, isAdmin
    }
}