import * as z from "zod";
import { useForm } from "react-hook-form";
import { Form, Row, Col } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Input,
  Button,
  FormHeader,
  MessageError,
  FormContainer,
  RegisterContent,
  RegisterContainer,
} from "./styles";
import busImg from "../../assets/bus.png";
import { usePessoa } from "../../hooks/usePessoa";

const newPessoaFormSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  email: z.string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  nascimento: z.string().nonempty("A data de nascimento é obrigatória"),
  telefone: z.string().nonempty("O telefone é obrigatório"),
  senha: z.string().min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type NewPessoaFormInputs = z.infer<typeof newPessoaFormSchema>

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<NewPessoaFormInputs>({
    resolver: zodResolver(newPessoaFormSchema),
  });
  const { createPessoa } = usePessoa();

  const handleCreateNewPessoa = async (data: NewPessoaFormInputs) => {
    const { nome, email, nascimento, telefone, senha } = data;

    createPessoa({
      nome,
      email,
      nascimento,
      telefone,
      senha,
    });

    reset();
  }

  return (
    <RegisterContainer>
      <RegisterContent>
        <img src={busImg} alt="" />

        <FormContainer onSubmit={handleSubmit(handleCreateNewPessoa)}>
          <FormHeader>
            <h2>aehmotor</h2>
            <h1>Criar uma conta</h1>
          </FormHeader>
          <Row className="mb-3">
            <Col>
              <Form.Label>Nome completo</Form.Label>
              <Input
                placeholder="Digite o seu nome completo"
                {...register("nome")}
              />
              {errors.nome && <MessageError>{errors.nome.message}</MessageError>}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>E-mail</Form.Label>
              <Input
                type="email"
                placeholder="Digite o seu e-mail"
                {...register("email")}
              />
              {errors.email && <MessageError>{errors.email.message}</MessageError>}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Label>Telefone</Form.Label>
              <Input
                placeholder="Digite o seu telefone"
                {...register("telefone")}
              />
            {errors.telefone && <MessageError>{errors.telefone.message}</MessageError>}
            </Col>
            <Col>
              <Form.Label>Data de nascimento</Form.Label>
              <Input
                type="date"
                placeholder="Selecione a data"
                {...register("nascimento")}
              />
            {errors.nascimento && <MessageError>{errors.nascimento.message}</MessageError>}
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <Form.Label>Senha</Form.Label>
              <Input
                type="password"
                placeholder="Digite a sua senha"
                {...register("senha")}
              />
              {errors.senha && <MessageError>{errors.senha.message}</MessageError>}
            </Col>
          </Row>

          <Button type="submit" disabled={isSubmitting}>Criar uma conta</Button>
        </FormContainer>
      </RegisterContent>
    </RegisterContainer>
  );
};