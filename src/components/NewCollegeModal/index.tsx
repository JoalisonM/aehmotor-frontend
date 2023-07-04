import { useEffect } from "react";
import * as z from "zod";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Label,
  Input,
  Fieldset,
  Container,
  MessageError,
} from "./styles";
import { useStudents } from "../../hooks/useStudent";
import { useColleges } from "../../hooks/useColleges";
import { Select, Option } from "../../styles/components/select";
import { Button } from "../../styles/components/button";

const newStudentFormSchema = z.object({
  matricula: z.string().nonempty("A matrícula é obrigatória")
    .trim()
    .min(1, { message: "Deve ter mais de 1 caractere"}),
  curso: z.string().nonempty("O curso é obrigatório")
    .trim()
    .min(1, { message: "Deve ter mais de 1 caractere"}),
  turno: z.string().nonempty("O turno é obrigatório")
    .trim()
    .min(1, { message: "Deve ter mais de 1 caractere"}),
  id_instituicao_ensino: z.number(),
});

type NewStudentFormInputs = z.infer<typeof newStudentFormSchema>

interface NewCollegeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewCollegeModal = (props: NewCollegeModalProps) => {
  const { isOpen, onRequestClose } = props;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewStudentFormInputs>({
    resolver: zodResolver(newStudentFormSchema),
  });

  const userInfo = JSON.parse(localStorage.getItem("user-storage") || "");
  const userId: number = userInfo.userId;
  const { patchStudent } = useStudents();
  const { colleges, fetchColleges } = useColleges();

  useEffect(() => {
    fetchColleges();
  }, [fetchColleges]);

  const handleSubmitCollege = (data: NewStudentFormInputs) => {
    const { turno, curso, matricula, id_instituicao_ensino } = data;

    if (userId) {
      patchStudent({
        id: userId,
        turno,
        curso,
        matricula,
        id_instituicao_ensino,
      });
    }

    reset();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <Container onSubmit={handleSubmit(handleSubmitCollege)}>
        <h2>Adicionar Informações da Faculdade</h2>
        <Fieldset>
          <Label htmlFor="faculdade">Instituição de ensino:</Label>
          <Select
            id="faculdade"
            {...register("id_instituicao_ensino", { valueAsNumber: true })}
          >
            {colleges && colleges.map((college) => (
              <Option
                key={college.id}
                value={college.id}
              >
                {college.nome}
              </Option>
            ))}
          </Select>
          {errors.id_instituicao_ensino && <MessageError>{errors.id_instituicao_ensino.message}</MessageError>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="matricula">Matrícula:</Label>
          <Input
            id="matricula"
            type="text"
            placeholder="Matrícula"
            {...register("matricula")}
          />
          {errors.matricula && <MessageError>{errors.matricula.message}</MessageError>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="curso">Curso:</Label>
          <Input
            id="curso"
            type="text"
            placeholder="Curso"
            {...register("curso")}
          />
          {errors.curso && <MessageError>{errors.curso.message}</MessageError>}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="turno">Turno:</Label>
          <Input
            id="turno"
            type="text"
            placeholder="Turno"
            {...register("turno")}
          />
          {errors.turno && <MessageError>{errors.turno.message}</MessageError>}
        </Fieldset>

        <Button type="submit">
          Cadastrar
        </Button>
      </Container>
    </Modal>
  );
};