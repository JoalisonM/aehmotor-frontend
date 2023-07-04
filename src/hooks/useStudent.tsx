import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

import { Student, StudentProps, CreateStudentInput, UpdateStudentInput, Routes, UpdateStudentCollegeInput } from "../api/student";
import { useAuth } from "../contexts/Auth";

interface StudentContextType {
    routes: Routes[];
    student: StudentProps;
    students: StudentProps[];
    getRoutes: (id: number) => Promise<void>;
    setStudent: (value: StudentProps) => void;
    getStudent: (id: number) => Promise<void>;
    setStudents: (value: StudentProps[]) => void;
    getStudents: () => Promise<StudentProps[] | undefined>;
    patchStudent: (data: UpdateStudentCollegeInput) => Promise<void>;
    createStudent: (data: CreateStudentInput) => Promise<StudentProps>;
    updateStudent: (data: UpdateStudentInput) => Promise<StudentProps>;
}

interface StudentsContextProviderProps {
    children: ReactNode;
}

export const StudentsContext = createContext({} as StudentContextType);

export const StudentsContextProvider = ({ children }: StudentsContextProviderProps) => {
    const { setUser } = useAuth();
    const [routes, setRoutes] = useState<Routes[]>([]);
    const [students, setStudents] = useState<StudentProps[]>([]);
    const [student, setStudent] = useState<StudentProps>({} as StudentProps);

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

    const getRoutes = useCallback(
        async (id: number) => {
            const response = await Student.getRoutes(id);

            if (response.data) {
                setRoutes(response.data);
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

    const patchStudent = useCallback(
        async (data: UpdateStudentCollegeInput) => {
            const { id, curso, matricula, turno, id_instituicao_ensino } = data;

            const response = await Student.patch(
                {
                    id,
                    curso,
                    turno,
                    matricula,
                    id_instituicao_ensino,
                }
            );

            setUser(response.data);

            return response.data;
        }, []
    );

    return (
        <StudentsContext.Provider
            value={{
                routes,
                student,
                students,
                getRoutes,
                getStudent,
                setStudent,
                setStudents,
                getStudents,
                patchStudent,
                createStudent,
                updateStudent,
            }}
        >
            {children}
        </StudentsContext.Provider>
    );
}

export const useStudents = () => {
    const routes = useContextSelector(StudentsContext, (context) => context.routes);
    const student = useContextSelector(StudentsContext, (context) => context.student);
    const students = useContextSelector(StudentsContext, (context) => context.students);
    const getRoutes = useContextSelector(StudentsContext, (context) => context.getRoutes);
    const getStudent = useContextSelector(StudentsContext, (context) => context.getStudent);
    const setStudent = useContextSelector(StudentsContext, (context) => context.setStudent);
    const getStudents = useContextSelector(StudentsContext, (context) => context.getStudents);
    const setStudents = useContextSelector(StudentsContext, (context) => context.setStudents);
    const patchStudent = useContextSelector(StudentsContext, (context) => context.patchStudent);
    const createStudent = useContextSelector(StudentsContext, (context) => context.createStudent);
    const updateStudent = useContextSelector(StudentsContext, (context) => context.updateStudent);

    return {
        routes,
        student,
        students,
        getRoutes,
        setStudent,
        getStudent,
        setStudents,
        getStudents,
        patchStudent,
        createStudent,
        updateStudent,
    };
}