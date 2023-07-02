import { api } from "../lib/axios";

export interface PessoaProps {
  id: number;
  nome: string;
  email: string;
  nascimento: String;
  telefone: string;
  senha: string;
  tipo: string;
}

export interface CreatePessoaInput {
  nome: string;
  email: string;
  nascimento: String;
  telefone: string;
  senha: string;
}

export interface UpdatePessoaInput {
  id: number;
  nome: string;
  email: string;
  nascimento: String;
  telefone: string;
  senha: string;
}

const uriPessoa = "pessoas"

export const Pessoa = {
  getAll() {
    return api.get(`${uriPessoa}`);
  },

  get(id: number) {
    return api.get(`${uriPessoa}/${id}`);
  },

  create(pessoa: CreatePessoaInput) {
    return api.post(`${uriPessoa}`, pessoa);
  },

  update(pessoa: UpdatePessoaInput) {
    const { id, ...novaPessoa } = pessoa;

    return api.put( `${uriPessoa}/${id}`, novaPessoa);
  },

  delete(id: number) {
    return api.delete(`${uriPessoa}/${id}`);
  }
};