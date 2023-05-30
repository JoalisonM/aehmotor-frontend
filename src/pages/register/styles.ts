import { Form } from "react-bootstrap";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const RegisterContent = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 100px 0 0 100px;
  max-width: 900px;

  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: space-between;

  img {
    margin-left: -300px;
  }
`;

export const FormContainer = styled(Form)`
  width: 900px;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-weight: 600;
  }
`;

export const FormHeader = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 24px;
  }

  h1 {
    font-weight: 600;
    margin-bottom: 24px;
    color: ${(props) => props.theme["blue-400"]};
  }
`;

export const Input = styled(Form.Control)`
  border: 0;
  border-radius: 14px;
  height: 50px;

  &::placeholder {
    font-size: 12px;
    color: ${(props) => props.theme["gray-400"]}
  }
`;

export const Button = styled.button`
  height: 50px;
  border: 0;
  font-weight: 700;
  border-radius: 12px;
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["blue-500"]} !important;
`;