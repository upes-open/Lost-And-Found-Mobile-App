import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { deleteData } from "../utils/asyncStore";
import { refreshToken } from "../utils/refreshToken";
import { sendCreateUserReq } from "../utils/api";

const context = createContext({
  isLoading: true,
  auth: null,
  logout: () => {},
  authUser: () => {},
});

export function useAuth() {
  return useContext(context);
}

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState(null);

  const authUser = async () => {
    const result = await refreshToken();
    if (result) {
      const decoded = jwtDecode(result.accessToken);
      setAuth(decoded);
    }
  };

  useEffect(() => {
    authUser().finally(() => setIsLoading(false));
  }, []);

  const logout = async () => {
    try {
      await deleteData("cachedToken");
      setAuth(null);
    } catch (err) {
      console.log("logout error");
      console.log(err);
    }
  };

  return (
    <context.Provider
      value={useMemo(
        () => ({ isLoading, auth, logout, authUser }),
        [isLoading, auth, logout, authUser]
      )}
    >
      {children}
    </context.Provider>
  );
}
