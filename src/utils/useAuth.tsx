import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useMemo,
} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

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
