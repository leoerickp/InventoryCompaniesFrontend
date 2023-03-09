import { TableProps } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAppContext } from "../../contexts/appcontext/AppContext";
import { getItems } from "../../store/slices/items/thunks";
import { ItemDataType } from "../interfaces/item-data-type.interface";
import { itemsTableColumns } from "../constants/items-table-columns";
import { itemsTableProps } from "../constants/items-table-props";


export const useHandleItemsDataTableProps = (NIT: string | undefined) => {
    const { setCurrentMenuOption } = useAppContext()
    const { isAdmin } = useSelector((state: any) => state.auth);
    const columns = isAdmin ? itemsTableColumns : itemsTableColumns.filter(column => column.key !== 'action');
    const { count: total, isLoading: loading, dataSource } = useSelector((state: any) => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentMenuOption('companies');
        if (NIT) dispatch(getItems(NIT, 10, 0));
    }, [])

    const changePage = async (page: number, pageSize: number): Promise<void | undefined> => {
        if (NIT) dispatch(getItems(NIT, pageSize, pageSize * (page - 1)));
    };

    const dynamicTableProps: TableProps<ItemDataType> = {
        ...itemsTableProps,
        pagination:
        {
            position: ["bottomRight"],
            total,
            onChange: changePage,
            showTotal: (total: number, range: any) =>
                `${range[0]}-${range[1]} of ${total} items`,
        },
        columns,
        dataSource: dataSource.map((data: ItemDataType) => ({ ...data, key: data.id })),
        loading,
    }

    return {
        dynamicTableProps, isAdmin
    }
}