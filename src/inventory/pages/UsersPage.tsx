import { Table } from "antd";
import { useHandlePageMessagesEvent } from "../hooks/useHandlePageMessagesEvent";
import * as usersSlice from "../../store/slices/users/usersSlice";
import Title from "antd/es/typography/Title";
import { useHandleUsersDataTableProps } from "../hooks/useHandleUsersDataTableProps";
import { getUsers } from "../../store/slices/users/thunks";

export const UsersPage = () => {
  const { dynamicTableProps } = useHandleUsersDataTableProps();

  const { createNewButtonEvent } = useHandlePageMessagesEvent({
    sliceSource: usersSlice,
    createPath: "/users/create",
    nameState: "users",
    getData: getUsers,
  });

  return (
    <Table
      {...dynamicTableProps}
      title={() => <Title level={2}>Users</Title>}
      className="animate__animated animate__fadeIn animate_faster"
    />
  );
};
