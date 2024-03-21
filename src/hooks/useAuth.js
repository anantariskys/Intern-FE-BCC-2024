import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/services/auth";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!window.localStorage.getItem("token"));
   
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(!!window.localStorage.getItem("token"))
  }, [isAuthenticated])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        setUserData(response)
        if (response.alamat ===""||response.contact==="") {
         
        }else{


        }

      


      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);





  const logout = () => {
    window.localStorage.removeItem("token");
    navigate('/');
  };

  return { isAuthenticated, logout, userData};
};

export default useAuth;
