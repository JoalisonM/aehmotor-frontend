import { api } from "../lib/axios";
import { StudentProps } from "./student";

export interface LoginProps {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
}

const uriLogin = "/login";
const uriLogout = "/logout";
const uriGetMe = "/alunos/me";

export const Authenticator = {
  doLogin(parameter: LoginProps) {
    return api.post<LoginResponse>(
      uriLogin,
      parameter
    );
  },

  doLogout() {
    return api.post(uriLogout);
  },

  getMe() {
    return api.get<StudentProps>(uriGetMe);
  }
};