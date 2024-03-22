
import { Outlet, Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const CheckValidated = () => {
    const { isValidated } = useAuth();

    if (!isValidated) {
        return <Navigate to={"/verifikasi"} />;
    }
    return <Outlet />;
};

export default CheckValidated;
