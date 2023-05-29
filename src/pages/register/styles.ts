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
  min-width: 1200px;

  display: flex;
  align-items: center;

  img {
    margin-left: -300px;
  }
`;

