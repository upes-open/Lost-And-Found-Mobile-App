import { useMemo } from "react";
import { context } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const main = async () => {
      try {
        const result = await refreshToken();
        setAuth(result === false ? true : false);
      } finally {
        setIsLoading(false);
      }
    };

    main();
  }, []);

  return <context.Provider value={useMemo(() => {}, [])}></context.Provider>;
}
