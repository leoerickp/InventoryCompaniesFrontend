import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/users/thunks";

export const useHandleUserActions = () => {
  const { userData } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const updateUserData = async (id: string, values: any) => {
    dispatch(updateUser(id, values));
  };
  return { userData, updateUserData };
};
