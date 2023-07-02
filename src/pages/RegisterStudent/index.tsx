import * as z from "zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Label,
  Input,
  Button,
  Fieldset,
  FormHeader,
  MessageError,
  FormContainer,
  RegisterContent,
  RegisterContainer,
} from "./styles";
import busImg from "../../assets/bus.png";
import { useStudents } from "../../hooks/useStudent";

const newStudentFormSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  email: z.string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  nascimento: z.string().nonempty("A data de nascimento é obrigatória"),
  telefone: z.string().nonempty("O telefone é obrigatório"),
  senha: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type NewStudentFormInputs = z.infer<typeof newStudentFormSchema>

export const RegisterStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<NewStudentFormInputs>({
    resolver: zodResolver(newStudentFormSchema),
  });
  const navigate = useNavigate();
  const { createStudent } = useStudents();

  const handleCreateNewStudent = async (data: NewStudentFormInputs) => {
    const { nome, email, nascimento, telefone, senha } = data;

    const response = await createStudent({
      nome,
      email,
      nascimento,
      telefone,
      senha,
    });

    if (response.id) {
      navigate("/login");
      reset();
    }
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <img src={busImg} alt="" />

        <FormContainer onSubmit={handleSubmit(handleCreateNewStudent)}>
          <FormHeader>
            <h2>aehmotor</h2>
            <h1>Criar uma conta</h1>
          </FormHeader>
          <Fieldset cols={false}>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="nome"
              placeholder="Digite o seu nome completo"
              {...register("nome")}
            />
            {errors.nome && <MessageError>{errors.nome.message}</MessageError>}
          </Fieldset>

          <Fieldset cols={false}>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o seu e-mail"
                {...register("email")}
              />
              {errors.email && <MessageError>{errors.email.message}</MessageError>}
          </Fieldset>

          <Fieldset cols={true}>
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                placeholder="Digite o seu telefone"
                {...register("telefone")}
              />
              {errors.telefone && <MessageError>{errors.telefone.message}</MessageError>}
            </div>
            <div>
              <Label htmlFor="nascimento">Data de nascimento</Label>
              <Input
                id="nascimento"
                type="date"
                placeholder="Selecione a data"
                {...register("nascimento")}
              />
              {errors.nascimento && <MessageError>{errors.nascimento.message}</MessageError>}
            </div>
          </Fieldset>

          <Fieldset cols={false}>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite a sua senha"
                {...register("senha")}
              />
              {errors.senha && <MessageError>{errors.senha.message}</MessageError>}
          </Fieldset>

          <Button type="submit" disabled={isSubmitting}>Criar uma conta</Button>

          <small>
            Já tem uma conta?
            <NavLink to="/login">Ir para o Login</NavLink>
          </small>
        </FormContainer>
      </RegisterContent>
    </RegisterContainer>
  );
};