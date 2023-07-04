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

export interface UpdateStudentCollegeInput {
  id: number;
  curso: string;
  turno: string;
  matricula: string;
  id_instituicao_ensino: number;
}

export interface Routes {
  cidade_destino:string,
  horario_saida:string,
  horario_chegada:string,
  turno:string,
  nome_instituicao_ensino:string
}

const uriStudent = "alunos"

export const Student = {
  get(id: number) {
    return api.get(`${uriStudent}/${id}`);
  },

  getAll() {
    return api.get<StudentProps[] | undefined>(`${uriStudent}`);
  },

  getRoutes(id: number) {
    return api.get<Routes[]>(`${uriStudent}-rotas/${id}`)
  },

  create(student: CreateStudentInput) {
    return api.post(`${uriStudent}`, student);
  },

  update(student: UpdateStudentInput) {
    const { id, ...newStudent } = student;

    return api.put(`${uriStudent}/${id}`, newStudent);
  },

  patch(college: UpdateStudentCollegeInput) {
    const { id, ...newCollege } = college;

    return api.patch(`${uriStudent}/${id}`, newCollege);
  }
};