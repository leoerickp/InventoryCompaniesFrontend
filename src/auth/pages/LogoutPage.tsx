import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHandleMenuClicks } from "../../inventory/hooks/useHandleMenuClicks";
import { removeAuth } from "../../store/slices/auth/authSlice";
export const LogoutPage = () => {
  const { setCurrentMenuOption } = useHandleMenuClicks();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeAuth());
    setCurrentMenuOption("companies");
  }, []);
  return <></>;
};
