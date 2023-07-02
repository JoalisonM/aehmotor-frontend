
import { useState } from "react";
import * as z from "zod";
import * as Toast from "@radix-ui/react-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import {
  Input,
  Label,
  Fieldset,
  ToastRoot,
  ToastTitle,
  ImgContent,
  LoginContent,
  MessageError,
  ToastViewport,
  LoginContainer,
  SectionContent,
} from "./styles";
import WomenImg from "../../assets/women.svg";
import { LoginProps } from "../../api/authenticator";
import { Button } from "../../styles/components/button";
import { useAuth } from "../../contexts/Auth";

const loginFormSchema = z.object({
  email: z.string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido")
    .toLowerCase(),
  senha: z.string()
    .trim()
    .min(6, "A senha precisa de no mínimo 6 caracteres"),
});

type LoginFormInputs = z.infer<typeof loginFormSchema>;

export const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [openToast, setOpenToast] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLogin: SubmitHandler<LoginProps> = async (value) => {
    const { email, senha } = value;

    try {
      const isLogged = await signIn({
        email,
        senha,
      });

      if (isLogged) {
        const origin = location?.state?.from?.pathname || '/home';
        navigate(origin);

        reset();
      }
    } catch (error) {
      setOpenToast(true);
    }
  };

  return (
    <LoginContainer>
      <LoginContent>
        <SectionContent>
          <h1>
            <span>Bem vindo ao</span>
            <span>aehmotor</span>
          </h1>
          <p>
            Uma <span>nova maneira de gerenciar</span> os
            estudantes que utilizam o transporte
            público dos municípios.
          </p>
          <ImgContent>
            <img src={WomenImg} />
          </ImgContent>
        </SectionContent>

        <section>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Fieldset>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o seu e-mail"
                {...register("email")}
              />
              {errors.email && <MessageError>{errors.email.message}</MessageError>}
            </Fieldset>
            <Fieldset>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="Digite a sua senha"
                {...register("senha")}
              />
              {errors.senha && <MessageError>{errors.senha.message}</MessageError>}
            </Fieldset>

            <Button type="submit">Entrar</Button>

            <small>
              Não tem uma conta ainda?
              <NavLink to="/register-student">Cadastre-se</NavLink>
            </small>
          </form>
        </section>
        <Toast.Provider duration={3000}>
          <ToastRoot open={openToast} onOpenChange={setOpenToast}>
            <ToastTitle>
              Email ou senha inválidos.
            </ToastTitle>
          </ToastRoot>
          <ToastViewport />
        </Toast.Provider>
      </LoginContent>
    </LoginContainer>
  );
};