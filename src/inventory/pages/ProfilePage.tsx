import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { useAppContext } from "../../contexts/appcontext/AppContext";
import { FormProfile } from "../components/FormProfile";
import { useEffect } from "react";
import { useHandlePageMessagesEvent } from "../hooks/useHandlePageMessagesEvent";
import * as usersSlice from "../../store/slices/users/usersSlice";

export const ProfilePage = () => {
  const { createNewButtonEvent } = useHandlePageMessagesEvent({
    sliceSource: usersSlice,
    createPath: "/users/create",
    nameState: "users",
  });
  const { setCurrentMenuOption } = useAppContext();
  useEffect(() => {
    setCurrentMenuOption("profile");
  }, []);

  return (
    <Space
      direction="vertical"
      style={{ width: "100%" }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Title level={3}>Profile</Title>
      <FormProfile />
    </Space>
  );
};
