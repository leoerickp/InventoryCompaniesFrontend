import { Menu } from "antd";
import { useSelector } from "react-redux";
import { mainItems } from "../constants/menu-items";
import { useHandleMenuClicks } from "../hooks/useHandleMenuClicks";

export const MainMenu = () => {
  const { currentMenuOption, onClick } = useHandleMenuClicks();
  const { isAdmin } = useSelector((state: any) => state.auth);
  const items = isAdmin
    ? mainItems
    : mainItems?.filter((item: any) => item.key !== "users");
  return (
    <Menu
      theme={"dark"}
      onClick={onClick}
      selectedKeys={[currentMenuOption]}
      mode="horizontal"
      items={items}
    />
  );
};
