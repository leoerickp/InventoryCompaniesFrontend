import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createCompany, updateCompany } from "../../store/slices/companies/thunks";

export const useHandleFormCompanyData = () => {
    const navigate = useNavigate();
    const { NIT } = useParams();
    const { dataSource } = useSelector((state: any) => state.companies);
    const dispatch = useDispatch();
    const [initialValues, setInitialValues] = useState(
        NIT ? dataSource.find((data: any) => data.NIT === NIT) : undefined
    );



    const onFinish = (values: any) => {
        if (NIT) dispatch(updateCompany(NIT, values));
        else dispatch(createCompany(values));
        navigate(-1);
    };
    return { onFinish, initialValues }
}