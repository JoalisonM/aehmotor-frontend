import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { Pretense, PretenseProps, CreatePretenseInput } from "../api/pretense";

interface PretensesContextType {
  pretense: PretenseProps;
  pretenses: PretenseProps[];
  fetchPretenses: () => Promise<void>;
  getPretense: (id: number) => Promise<void>;
  setPretense: (value: PretenseProps) => void;
  patchPretense: (id: number) => Promise<void>;
  setPretenses: (value: PretenseProps[]) => void;
  createPretense: (data: CreatePretenseInput) => Promise<void>;
}

interface PretensesContextProviderProps {
  children: ReactNode;
}

export const PretensesContext = createContext({} as PretensesContextType);

export const PretensesContextProvider = ({ children }: PretensesContextProviderProps) => {
  const [pretenses, setPretenses] = useState<PretenseProps[]>([]);
  const [pretense, setPretense] = useState<PretenseProps>({} as PretenseProps);

  const fetchPretenses = useCallback(async () => {
    const response = await Pretense.getAll();

    setPretenses(response.data);
  }, []);

  const getPretense = useCallback(
    async (id: number) => {
      const response = await Pretense.get(id);

      if (response) {
        setPretense(response.data);
      }
    }, []
  );

  const createPretense = useCallback(
    async (data: CreatePretenseInput) => {
      const { id_viagem, id_aluno, embarque, data_embarque } = data;

      const response = await Pretense.create(
        {
          id_aluno,
          id_viagem,
          embarque,
          data_embarque,
        }
      );

      setPretense(response?.data);
      setPretenses((state) => [response?.data, ...state]);

      return response.data;
    }, []
  );

  const patchPretense = useCallback(
    async (id: number) => {
      const response = await Pretense.patch(id);

      setPretenses((state) => state.map((pretense) => pretense.id === id ? response.data : pretense));

      return response.data;
    }, []
  );

  return (
    <PretensesContext.Provider
      value={{
        pretense,
        pretenses,
        getPretense,
        setPretense,
        setPretenses,
        patchPretense,
        fetchPretenses,
        createPretense,
      }}
    >
      {children}
    </PretensesContext.Provider>
  );
}

export const usePretenses = () => {
  const pretense = useContextSelector(PretensesContext, (context) => context.pretense);
  const pretenses = useContextSelector(PretensesContext, (context) => context.pretenses);
  const getPretense = useContextSelector(PretensesContext, (context) => context.getPretense);
  const setPretense = useContextSelector(PretensesContext, (context) => context.setPretense);
  const setPretenses = useContextSelector(PretensesContext, (context) => context.setPretenses);
  const patchPretense = useContextSelector(PretensesContext, (context) => context.patchPretense);
  const fetchPretenses = useContextSelector(PretensesContext, (context) => context.fetchPretenses);
  const createPretense = useContextSelector(PretensesContext, (context) => context.createPretense);

  return {
    pretense,
    pretenses,
    getPretense,
    setPretense,
    setPretenses,
    patchPretense,
    fetchPretenses,
    createPretense,
  };
}