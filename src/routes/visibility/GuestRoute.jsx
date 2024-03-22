import { Outlet, Navigate } from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";


const GuestRoute = () => {
    const {isAuthenticated} = useAuth()


  
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default GuestRoute;