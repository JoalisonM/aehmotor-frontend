import { useCallback, useState } from "react";
import { Pessoa, PessoaProps, CreatePessoaInput, UpdatePessoaInput } from "../api/pessoa";

export const usePessoa = () => {
  const [allPessoas, setAllPessoas] = useState<PessoaProps[]>([]);
  const [pessoa, setPessoa] = useState<PessoaProps>({} as PessoaProps);

  const getAllPessoas = async (): Promise<any> => {
    const response = await Pessoa.getAll();

    setAllPessoas(response.data);
  };

  const getPessoa = async (id: number): Promise<any> => {
    const response = await Pessoa.get(id);

    if(response) {
      setPessoa(response.data);
    }
  };

  const createPessoa = useCallback(
    async (data: CreatePessoaInput) => {
      const { nome, email, nascimento, telefone, senha } = data;

      const response = await Pessoa.create(
        {
          nome,
          email,
          nascimento,
          telefone,
          senha,
        }
      );

      setAllPessoas((state) => [response.data, ...state]);
    }, []
  );

  const updatePessoa = useCallback(
    async (data: UpdatePessoaInput) => {
      const { id, nome, email, nascimento, telefone, senha } = data;

      const response = await Pessoa.update(
        {
          id,
          nome,
          email,
          nascimento,
          telefone,
          senha,
        }
      );

      setPessoa(response.data);
    }, []
  );

  const deletePessoa = async (id: number) => {
    Pessoa.delete(id);

    setAllPessoas((state) => state.filter((pessoa) => pessoa.id !== id));
  }

  return {
    pessoa,
    getPessoa,
    allPessoas,
    createPessoa,
    updatePessoa,
    deletePessoa,
    getAllPessoas,
  };
}