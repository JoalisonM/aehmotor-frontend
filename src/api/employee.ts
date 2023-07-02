import { api } from "../lib/axios";

export interface EmployeeProps {
  id: number;
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  senha: string;
  cargo: string;
}

export interface CreateEmployeeInput {
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  senha: string;
  cargo: string;
}

const uriEmployee = "funcionarios"

export const Employee = {
  get(id: number) {
    return api.get(`${uriEmployee}/${id}`);
  },

  create(employee: CreateEmployeeInput) {
    return api.post(`${uriEmployee}`, employee);
  },
};