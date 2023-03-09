import { TableProps } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "../../contexts/appcontext/AppContext";
import { getUsers } from "../../store/slices/users/thunks";
import { usersTableColumns } from "../constants/users-table-colums";
import { usersTableProps } from "../constants/users-table-props";
import { UserDataType } from "../interfaces/user-data-type.interface";

export const useHandleUsersDataTableProps = () => {
    const { setCurrentMenuOption } = useAppContext()
    const { count: total, isLoading: loading, dataSource } = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentMenuOption('users');
        dispatch(getUsers(10, 0));
    }, [])

    const changePage = async (page: number, pageSize: number): Promise<void | undefined> => {
        dispatch(getUsers(pageSize, pageSize * (page - 1)));
    };



    const dynamicTableProps: TableProps<UserDataType> = {
        ...usersTableProps,
        pagination:
        {
            position: ["bottomRight"],
            total,
            onChange: changePage,
            showTotal: (total: number, range: any) =>
                `${range[0]}-${range[1]} of ${total} users`,
        },
        columns: usersTableColumns,
        dataSource: dataSource.map((data: UserDataType) => ({ ...data, key: data.id })),
        loading,
    }

    return {
        dynamicTableProps
    }
}