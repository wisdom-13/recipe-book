import { useState, useEffect, createContext, useContext } from "react";
import { logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      console.log(user)
    })
  }, []);

  // return <AuthContext.Provider value={{ user, uid: user && user.uid }}>
  //   {children}
  // </AuthContext.Provider>

  return <AuthContext.Provider value={{ user, logout }}>
    {children}
  </AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}