import { useNavigate } from "react-router-dom";

import BusImg from "../../assets/bus.svg";

import {
  LandingContent,
  LandingContainer,
} from "./styles";

export const LandingPage = () => {
  const navigate = useNavigate();

  const redirectTo = (value: string) => {
    navigate(value);
  };

  return (
    <LandingContainer>
      <LandingContent>
        <section>
          <h1>
            <span>Nunca é tarde</span>
            <span>demais para melhorar o</span>
            <span>transporte público.</span>
          </h1>
          <p>
            Descubra uma nova forma de gerenciar os estudantes que
            utilizam os transportes públicos do seu município.
          </p>

          <button
            onClick={() => redirectTo('register-employee')}
          >
            Cadastre sua prefeitura
          </button>
        </section>
        <img src={BusImg} />
      </LandingContent>
    </LandingContainer>
  );
};