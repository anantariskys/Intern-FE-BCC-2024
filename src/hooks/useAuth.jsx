import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/services/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!window.localStorage.getItem('token'));
  const [ isValidated ,setIsValidated] = useState()
  const [userData, setUserData] = useState();


  useEffect(() => {
    setIsAuthenticated(!!window.localStorage.getItem('token'));
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfile();
        setUserData(response);
        if (response.alamat==="" || response.contact==="") {
          setIsValidated(false)
        } else {
          setIsValidated(true)
          
        }
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [isAuthenticated]);

  const logout = () => {
    window.localStorage.removeItem('token');
    setIsAuthenticated(false)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, userData,setIsAuthenticated ,isValidated}}>
      {children}
    </AuthContext.Provider>
  );
};
