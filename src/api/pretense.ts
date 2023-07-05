import { api } from "../lib/axios";

export interface PretenseProps {
  id: number;
  viagem: object;
  aluno: object;
  embarque: boolean;
  data_embarque: string;
  criacao: string;
}

export interface CreatePretenseInput {
  id_viagem: number;
  id_aluno: number;
  embarque: boolean;
  data_embarque: string;
}

export interface UpdatePretenseInput {
  id: number;
  id_viagem: number;
  id_aluno: number;
  embarque: boolean;
  data_embarque: string;
}

const uriPretense = "pretensoes"

export const Pretense = {
  get(id: number) {
    return api.get(`${uriPretense}/${id}`);
  },

  getAll() {
    return api.get<PretenseProps[]>(`${uriPretense}`);
  },

  create(pretense: CreatePretenseInput) {
    return api.post(`${uriPretense}`, pretense);
  },

  patch(id: number) {
    return api.patch(`${uriPretense}/${id}`);
  }
};