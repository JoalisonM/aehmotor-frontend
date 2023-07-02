import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { Student, StudentProps, CreateStudentInput, UpdateStudentInput } from "../api/student";

interface StudentContextType {
    student: StudentProps;
    students: StudentProps[];
    getStudents: () => Promise<StudentProps[] | undefined>;
    setStudent: (value: StudentProps) => void;
    getStudent: (id: number) => Promise<void>;
    setStudents: (value: StudentProps[]) => void;
    createStudent: (data: CreateStudentInput) => Promise<StudentProps>;
    updateStudent: (data: UpdateStudentInput) => Promise<StudentProps>;
}

interface StudentsContextProviderProps {
    children: ReactNode;
}

export const StudentsContext = createContext({} as StudentContextType);

export const StudentsContextProvider = ({ children }: StudentsContextProviderProps) => {
    const [student, setStudent] = useState<StudentProps>({} as StudentProps);
    const [students, setStudents] = useState<StudentProps[]>([]);

    const getStudents = useCallback(
        async () => {
            const response = await Student.getAll();

            if (response.data) {
                setStudents(response.data);

                return response.data;
            }
        }, []
    );

    const getStudent = useCallback(
        async (id: number) => {
            const response = await Student.get(id);

            if (response) {
                setStudent(response.data);
            }
        }, []
    );

    const createStudent = useCallback(
        async (data: CreateStudentInput) => {
            const { nome, email, nascimento, telefone, senha } = data;

            const response = await Student.create(
                {
                    nome,
                    email,
                    nascimento,
                    telefone,
                    senha,
                }
            );

            return response.data;
        }, []
    );

    const updateStudent = useCallback(
        async (data: UpdateStudentInput) => {
            const { id, nome, email, nascimento, telefone, senha,
                curso, matricula, turno, id_instituicao_ensino,
            } = data;

            const response = await Student.update(
                {
                id,
                id_instituicao_ensino,
                nome,
                email,
                nascimento,
                telefone,
                senha,
                curso,
                matricula,
                turno,
                }
            );

            return response.data;
        }, []
    );

    return (
        <StudentsContext.Provider
            value={{
                student,
                students,
                getStudent,
                setStudent,
                setStudents,
                getStudents,
                createStudent,
                updateStudent,
            }}
        >
            {children}
        </StudentsContext.Provider>
    );
}

export const useStudents = () => {
    const student = useContextSelector(StudentsContext, (context) => context.student);
    const students = useContextSelector(StudentsContext, (context) => context.students);
    const getStudent = useContextSelector(StudentsContext, (context) => context.getStudent);
    const getStudents = useContextSelector(StudentsContext, (context) => context.getStudents);
    const setStudent = useContextSelector(StudentsContext, (context) => context.setStudent);
    const setStudents = useContextSelector(StudentsContext, (context) => context.setStudents);
    const createStudent = useContextSelector(StudentsContext, (context) => context.createStudent);
    const updateStudent = useContextSelector(StudentsContext, (context) => context.updateStudent);

    return {
        student,
        students,
        setStudent,
        getStudent,
        setStudents,
        getStudents,
        createStudent,
        updateStudent,
    };
}