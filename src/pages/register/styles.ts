import { Form } from "react-bootstrap";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: flex-end;
`;

export const RegisterContent = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 100px 0 0 100px;
  max-width: 56.25rem;

  display: flex;
  align-items: center;
  gap: 5rem;
  /* justify-content: space-between; */

  img {
    margin-left: -300px;
  }

  @media (min-width: 1600px) {
    min-width: 75rem;
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

  input+span {
    margin-bottom: 1rem;
  }

  @media (min-width: 1600px) {
    width: 40rem;
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

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-400']};
  }

  &.form-control {
    font-size: 14px;
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const Button = styled.button`
  height: 50px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  border-radius: 12px;
  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => props.theme["blue-500"]} !important;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-900']};
  }

`;

export const MessageError = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme["red-300"]} ;
`;