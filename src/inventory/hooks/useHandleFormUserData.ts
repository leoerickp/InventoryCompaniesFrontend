import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../store/slices/users/thunks";

export const useHandleFormUserData = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { dataSource } = useSelector((state: any) => state.users);
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(
        id ? dataSource.find((data: any) => data.id === id) : undefined
    );
    useEffect(() => {
        if (initialValues === undefined) navigate('/users');
    }, [initialValues])

    const onFinish = (values: any) => {
        if (id) dispatch(updateUser(id, values));
        navigate(-1);
    };
    return { onFinish, initialValues }
}