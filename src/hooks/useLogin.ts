import { useState } from "react";

import { Authenticator, LoginProps } from "../api/authenticator";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(false);

  const getSession = async ({ email, senha }: LoginProps) => {
    try {
      setLoading(true);
      const response = await Authenticator.doLogin({
        email,
        senha,
      });

      return response.data;
    } finally {
      setLoading(false);
    }
  };

  const getMe = async () => {
    try {
      setLoadingUser(true);

      const userInfo = await Authenticator.getMe();

      return userInfo.data;
    } finally {
      setLoadingUser(false);
    }
  };

  const logout = async () => {
    try {
      const response = await Authenticator.doLogout();

      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getMe,
    logout,
    loading,
    getSession,
    loadingUser,
  };
};