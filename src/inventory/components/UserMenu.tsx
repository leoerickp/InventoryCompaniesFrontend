import { Menu } from "antd";
import { userItems } from "../constants/user-menu-items";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const UserMenu = () => {
  const { currentMenuOption, onClick } = useHandleMenuClicks();
  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[currentMenuOption]}
      mode="horizontal"
      items={userItems}
    />
  );
};
