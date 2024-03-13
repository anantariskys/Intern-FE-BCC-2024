import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const GuestRoute = () => {
    const isAuthenticate = useAuth()
  
  if (!isAuthenticate) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default GuestRoute;