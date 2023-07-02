import { api } from "../lib/axios";
import { PessoaProps } from "./pessoa";

export interface LoginProps {
  email: string;
  senha: string;
}

export interface LoginResponse {
  pessoa: {
    id: number;
    nome: string;
    email: string;
    nascimento: String;
    telefone: string;
    senha: string;
    tipo: string;
  };
  token: string;
}

const uriLogin = "/login";
const uriLogout = "/logout";
const uriGetMe = "/pessoas/me";

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
    return api.get<PessoaProps>(uriGetMe);
  }
};