import { Form } from "react-bootstrap";
import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const RegisterContent = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 100px 0 0 100px;
  height: 100vh;
  padding: 0 4rem;

  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: space-between;

  img {
    margin-left: -364px;
  }
`;

export const FormContainer = styled(Form)`
  width: 900px;
`;
