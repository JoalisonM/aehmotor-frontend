import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { College, CollegeProps } from "../api/college";

interface CollegesContextType {
  colleges: CollegeProps[];
  fetchColleges: () => Promise<void>;
}

interface CollegesContextProviderProps {
  children: ReactNode;
}

export const CollegesContext = createContext({} as CollegesContextType);

export const CollegesContextProvider = ({ children }: CollegesContextProviderProps) => {
  const [colleges, setColleges] = useState<CollegeProps[]>([]);

  const fetchColleges = useCallback(async () => {
    const response = await College.getAll();

    setColleges(response.data);
  }, []);

  return (
    <CollegesContext.Provider
      value={{
        colleges,
        fetchColleges,
      }}
    >
      {children}
    </CollegesContext.Provider>
  );
}

export const useColleges = () => {
  const colleges = useContextSelector(CollegesContext, (context) => context.colleges);
  const fetchColleges = useContextSelector(CollegesContext, (context) => context.fetchColleges);

  return {
    colleges,
    fetchColleges,
  };
}