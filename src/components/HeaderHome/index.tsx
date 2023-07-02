import { useNavigate } from "react-router-dom";
import * as Menubar from '@radix-ui/react-menubar';
import { CaretDown, SignOut, User } from "phosphor-react";

import Avatar from "../../assets/hey.svg";
import LogoImg from "../../assets/Logo-white.svg";
import {
  Title,
  HeaderMenu,
  MenubarItem,
  HeaderContent,
  MenubarContent,
  MenubarTrigger,
  HeaderContainer,
} from "./styles";
import { useAuth } from "../../contexts/Auth";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} />
        <HeaderMenu>
          <Title>
            <span>{user?.nome}</span>
            <small>{user?.tipo}</small>
          </Title>
          <Menubar.Root>
            <Menubar.Menu>
              <MenubarTrigger>
                <img src={Avatar} />
                <CaretDown size={16} />
              </MenubarTrigger>
              <Menubar.Portal>
                <MenubarContent align="center" sideOffset={24} alignOffset={-3}>
                  <MenubarItem>
                    <User weight="bold" size={16} />
                    Perfil
                  </MenubarItem>
                  <MenubarItem onClick={() => handleSignOut()}>
                    <SignOut weight="bold" size={16} />
                    Sair
                  </MenubarItem>
                </MenubarContent>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        </HeaderMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

