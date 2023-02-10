import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ uid: 111 });

  useEffect(() => {

  }, [])

  // return <AuthContext.Provider value={{ user, uid: user && user.uid }}>
  //   {children}
  // </AuthContext.Provider>

  return <AuthContext.Provider value={{ user }}>
    {children}
  </AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext);
}