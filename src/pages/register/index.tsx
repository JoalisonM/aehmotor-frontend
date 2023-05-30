import { Form, Row, Col } from "react-bootstrap";

import busImg from "../../assets/bus.png";
import {
  Input,
  Button,
  FormHeader,
  FormContainer,
  RegisterContent,
  RegisterContainer,
} from "./styles";


export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterContent>
        <img src={busImg} alt="" />

        <FormContainer>
          <FormHeader>
            <h2>aehmotor</h2>
            <h1>Criar uma conta</h1>
          </FormHeader>
          <Form.Label>Nome completo</Form.Label>
          <Input
            required
            className="mb-3"
            placeholder="Digite o seu nome completo"
          />

          <Form.Label>E-mail</Form.Label>
          <Input
            required
            type="email"
            className="mb-3"
            placeholder="Digite o seu e-mail"
          />

          <Row>
            <Col>
              <Form.Label>Telefone</Form.Label>
              <Input
                required
                className="mb-3"
                placeholder="Digite o seu telefone"
              />
            </Col>
            <Col>
              <Form.Label>Data de nascimento</Form.Label>
              <Input
                required
                type="date"
                className="mb-3"
                placeholder="Selecione a data"
              />
            </Col>
          </Row>

          <Form.Label>Senha</Form.Label>
          <Input
            required
            type="password"
            className="mb-5"
            placeholder="Digite a sua senha"
          />

          <Button type="submit">Criar uma conta</Button>
        </FormContainer>
      </RegisterContent>
    </RegisterContainer>
  );
};