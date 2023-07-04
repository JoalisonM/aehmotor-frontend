import { api } from "../lib/axios";

export interface AddressProps {
  id: number;
  id_cidade: number;
  id_pessoa: number;
  cep: string;
  numero: number;
  complemento: string;
  referencia: string;
  logradouro: string;
}

export interface CollegeProps {
  id: number;
  nome: string;
  telefone: string;
  endereco: AddressProps;
}
const uriCollege = "instituicoesDeEnsino"

export const College = {
  getAll() {
    return api.get(uriCollege);
  },
};