import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAuth } from "../../store/slices/auth/authSlice";
import { FormLogin } from "../components/FormLogin";

export const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeAuth());
  }, []);
  return (
    <Card
      title="Login"
      bordered={false}
      style={{ width: 350 }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <FormLogin />
    </Card>
  );
};
