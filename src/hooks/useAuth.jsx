import React, { createContext, useContext, useEffect, useState } from 'react';

import { getProfile } from '../api/services/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!window.localStorage.getItem('token'));
  const [isValidated, setIsValidated] = useState();
  const [userData, setUserData] = useState();
  const [isDataLoaded, setIsDataLoaded] = useState(false); 

  useEffect(() => {
    setIsAuthenticated(!!window.localStorage.getItem('token'));
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem('token')) {
          const response = await getProfile();
           setUserData(response);
           if (response && response.alamat === "" || response && response.contact === "") {
             setIsValidated(false);
           } else {
             setIsValidated(true);
           }
        }
        setIsDataLoaded(true); 
      } catch (error) {
        if (error.response.statusText === "Unauthorized") {
          window.localStorage.removeItem("token");
          
          setIsAuthenticated(false);
        }
        setIsDataLoaded(true); 
      }
    };

    fetchData();
  }, [isAuthenticated]);

  const logout = () => {
    window.localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, userData, setIsAuthenticated, isValidated, isDataLoaded }}>
      {isDataLoaded && children} 
    </AuthContext.Provider>
  );
};
