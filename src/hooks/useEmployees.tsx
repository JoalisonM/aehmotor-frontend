import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { Employee, EmployeeProps, CreateEmployeeInput } from "../api/employee";

interface EmployeesContextType {
  employee: EmployeeProps;
  setEmployee: (value: EmployeeProps) => void;
  getEmployee: (id: number) => Promise<void>;
  createEmployee: (data: CreateEmployeeInput) => Promise<void>;
}

interface EmployeesContextProviderProps {
  children: ReactNode;
}

export const EmployeesContext = createContext({} as EmployeesContextType);

export const EmployeesContextProvider = ({ children }: EmployeesContextProviderProps) => {
  const [employee, setEmployee] = useState<EmployeeProps>({} as EmployeeProps);

  const getEmployee = useCallback(
    async (id: number) => {
      const response = await Employee.get(id);

      if (response) {
        setEmployee(response.data);
      }
    }, []
  );

  const createEmployee = useCallback(
    async (data: CreateEmployeeInput) => {
      const { nome, email, nascimento, telefone, senha, cargo } = data;

      const response = await Employee.create(
        {
          nome,
          email,
          nascimento,
          telefone,
          senha,
          cargo,
        }
      );

      return response.data;
    }, []
  );

  return (
    <EmployeesContext.Provider
      value={{
        employee,
        getEmployee,
        setEmployee,
        createEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

export const useEmployees = () => {
  const employee = useContextSelector(EmployeesContext, (context) => context.employee);
  const getEmployee = useContextSelector(EmployeesContext, (context) => context.getEmployee);
  const setEmployee = useContextSelector(EmployeesContext, (context) => context.setEmployee);
  const createEmployee = useContextSelector(EmployeesContext, (context) => context.createEmployee);

  return {
    employee,
    setEmployee,
    getEmployee,
    createEmployee,
  };
}