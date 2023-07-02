import { NavLink, useNavigate } from "react-router-dom";

import LogoImg from "../../assets/Logo-blue.svg";
import { Button, HeaderContainer, HeaderContent } from "./styles";

export const Header = () => {
  const navigate = useNavigate();

  const redirectTo = (value: string) => {
    navigate(value);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">Sobre nós</NavLink>
        </nav>
        <span>
          <Button
            outlined={true}
            onClick={() => redirectTo('register-student')}
        >
          Cadastro do aluno
        </Button>
        <Button
          onClick={() => redirectTo('login')}
        >
          Entrar
        </Button>
        </span>
      </HeaderContent>
    </HeaderContainer>
  );
};