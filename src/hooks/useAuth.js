import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState( () => !!window.localStorage.getItem("token"));
  console.log(isAuthenticated)
  return isAuthenticated;
};

export default useAuth