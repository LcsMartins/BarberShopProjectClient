import React, {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface User {
  id: string;
}

interface AuthState {
  user?: User;
  token?: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user?: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState<AuthState>(() => {
    const user = Cookies.get("@app-barber:user");
    const token = Cookies.get("@app-barber:token");

    if (user && token) {
      return { user: JSON.parse(user), token: JSON.parse(token) };
    }

    return {};
  });

  const signIn = useCallback(
    async ({ email, password }) => {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(`${api}user-auth`, {
        ...requestOptions,
        credentials: "include",
      });

      if (response.status === 200) {
        const signInData = await response.json();
        const { user, token } = signInData;

        Cookies.set("@app-barber:user", JSON.stringify(user));
        Cookies.set("@app-barber:token", JSON.stringify(token));

        navigate("/home");
      }
    },
    [navigate]
  );

  const signOut = useCallback(() => {
    Cookies.remove("@app-barber:user");
    Cookies.remove("@app-barber:token");

    setData({});
  }, []);

  const value = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
    }),
    [data.user, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
