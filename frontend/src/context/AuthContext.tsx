import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import useCookie, { getCookie } from "react-use-cookie";
import { AuthContextType, User, UserCredentials } from "../types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userToken, setUserToken, removeUserToken] = useCookie("token", "0");

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (userData: UserCredentials) => {
    const res = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    setUserToken(data.token);
    setUser(data.user);
  };

  const logout = () => {
    removeUserToken();
    setUser(null);
  };

  const fetchUser = async () => {
    const token = getCookie("token");
    if (!token) {
      return;
    }
    const res = await fetch("http://localhost:3000/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
