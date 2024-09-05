import React, { createContext, useContext, useEffect, useState } from "react";

const UserProvider = createContext();
export const useUserContext = () => {
  return useContext(UserProvider);
};

const UserContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || "");

  useEffect(() => {
    localStorage.setItem("username", user);
  }, [user]);

  return (
    <UserProvider.Provider value={{ user, setUser }}>
      {children}
    </UserProvider.Provider>
  );
};

export default UserContext;
