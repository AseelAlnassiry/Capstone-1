import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const login = async (userData) => {
    await localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    console.log(userData)
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const update = async (userData) => {
    await localStorage.removeItem("user");
    setUser(null);
    await localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, update }}>
      {children}
    </AuthContext.Provider>
  );
};
