import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useApiHandleNotification } from "../../common/hooks/useApiHandleNotification";
import { eraseErrorMessage } from "../../store/slices/auth/authSlice";
import { login, signUp } from '../../store/slices/auth/thunks';

export const useHandleAuthActions = () => {
    const { ApiErrorNotification } = useApiHandleNotification();
    const { isConnecting, errorMessage } = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();


    useEffect(() => {
        if (errorMessage) {
            ApiErrorNotification(errorMessage);
            dispatch(eraseErrorMessage())
        }
    }, [errorMessage])


    const authLoginSubmit = async (values: any) => {
        const { email, password } = values;
        dispatch(login({ email, password }));

    };

    const signUpSubmit = async (values: any) => {
        const { email, password, fullName } = values;
        dispatch(signUp({ email, password, fullName }));
    };

    return { authLoginSubmit, isConnecting, signUpSubmit }
}