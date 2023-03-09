import { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/appcontext/AppContext";

export const useHandleMenuClicks = () => {
    const { currentMenuOption, setCurrentMenuOption } = useAppContext()
    const navigate = useNavigate();

    const onClick: MenuProps["onClick"] = (e: any) => {
        if (e.key !== "leoerickp") {
            navigate(e.key);
            setCurrentMenuOption(e.key);
        }
        if (e.key === "logout") {
            navigate(`/${e.key}`);
        }
    };

    return {
        currentMenuOption,
        onClick,
        navigate,
        setCurrentMenuOption,
    }
}