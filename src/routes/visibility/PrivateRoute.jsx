import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = () => {
    const isAuthenticate = useAuth()
     
  if (!isAuthenticate) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};

export default PrivateRoute;