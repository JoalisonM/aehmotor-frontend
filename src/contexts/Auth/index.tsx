import { useState, useCallback, ReactNode, useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { useLogin } from "../../hooks/useLogin";
import { LoginProps } from "../../api/authenticator";
import AuthContext from "./context";
import { PessoaProps } from "../../api/pessoa";

const STORAGE_KEYS = {
  USER_KEY: "user-storage",
  ACCESS_TOKEN: "access-token",
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { loading, getSession, logout, getMe, loadingUser } = useLogin();
  const [user, setUser] = useState<PessoaProps | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

      if (token) {
        await handleUser();
      } else {
        await signOut();
      }
    };

    validateToken();
  }, []);

  const signIn = useCallback(async (userData: LoginProps) => {
    const { email, senha } = userData;

    const data = await getSession({
      email,
      senha,
    });

    if (data) {
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.token);
      await handleUser();

      return true;
    }

    return false;
  }, []);

  const handleUser = useCallback(async () => {
    const newUser = await getMe();
    setUser(newUser);

    localStorage.setItem(STORAGE_KEYS.USER_KEY, JSON.stringify({
      userId: newUser && newUser.id
    }));
  }, []);

  const signOut = useCallback(async () => {
    await logout();

    setUser(null);
    clearSessionData();
  }, []);

  const clearSessionData = () => {
    localStorage.setItem(STORAGE_KEYS.USER_KEY, "");
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, "");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        loading,
        loadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const loading = useContextSelector(AuthContext, (auth) => auth.loading);
  const signOut = useContextSelector(AuthContext, (auth) => auth.signOut);
  const signIn = useContextSelector(AuthContext, (auth) => auth.signIn);
  const user = useContextSelector(AuthContext, (auth) => auth.user);
  const loadingUser = useContextSelector(AuthContext, (auth) => auth.loadingUser);

  return {
    loading,
    signOut,
    signIn,
    user,
    loadingUser,
  };
}
