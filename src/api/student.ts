import { api } from "../lib/axios";

export interface StudentProps {
  id: number;
  id_instituicao_ensino: number;
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  senha: string;
  curso: string;
  matricula: string;
  turno: string;
}

export interface CreateStudentInput {
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  senha: string;
}

export interface UpdateStudentInput {
  id: number;
  id_instituicao_ensino: number;
  nome: string;
  email: string;
  nascimento: string;
  telefone: string;
  senha: string;
  curso: string;
  matricula: string;
  turno: string;
}

const uriStudent = "alunos"

export const Student = {
  get(id: number) {
    return api.get(`${uriStudent}/${id}`);
  },

  getAll() {
    return api.get<StudentProps[] | undefined>(`${uriStudent}`);
  },

  create(student: CreateStudentInput) {
    return api.post(`${uriStudent}`, student);
  },

  update(student: UpdateStudentInput) {
    const { id, ...newStudent } = student;

    return api.put(`${uriStudent}/${id}`, newStudent);
  },
};