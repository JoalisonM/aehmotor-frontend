import { Col, Form, Row } from "react-bootstrap";

import { RegisterContainer, RegisterContent } from "./styles";
import busImg from "../../assets/bus.png";


export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterContent>
        <img src={busImg} alt="" />

        <Form>
          <Form.Label>Nome completo</Form.Label>
          <Form.Control
            required
            placeholder="Digite o seu nome completo"
          />

          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Digite o seu e-mail"
          />

          <Form.Label>Telefone</Form.Label>
          <Form.Control
            required
            placeholder="Digite o seu telefone"
          />

          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Selecione a data"
          />

          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            placeholder="Digite a sua senha"
          />
        </Form>
      </RegisterContent>
    </RegisterContainer>
  );
};