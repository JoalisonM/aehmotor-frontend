import { useEffect, useState } from "react";

import {
  Card,
  Input,
  Label,
  Button,
  CardContainer,
  HomeContainer,
} from "./styles";
import { useAuth } from "../../contexts/Auth";
import { useStudents } from "../../hooks/useStudent";
import { NewCollegeModal } from "../../components/NewCollegeModal";
import { Select, Option } from "../../styles/components/select";

export const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-storage") || "");
  const userId = userInfo.userId;

  const { user } = useAuth();
  const { routes, getRoutes } = useStudents();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getRoutes(userId);

    if (user && !user.id_instituicao_ensino) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [user]);

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <HomeContainer>
      <h1>Minhas Rotas</h1>
      <CardContainer>
        {routes && routes.map((route) => (
          <Card key={route.turno}>
            <h2>{route.nome_instituicao_ensino}</h2>
            <div>
              <span>Turno: {route.turno}</span>
              <span>Saída: {route.horario_saida}</span>
            </div>
            <fieldset>
              <Label htmlFor="dia">Dia:</Label>
              <Input id="dia" type="date" />
            </fieldset>
            <fieldset>
              <Label htmlFor="opcao">Opção:</Label>
              <Select id="opcao">
                <Option value="1">Ida e Volta</Option>
                <Option value="2">Só ida</Option>
                <Option value="3">Só volta</Option>
              </Select>
            </fieldset>
            <Button>Pretendo ir</Button>
          </Card>
        ))}
      </CardContainer>

      {user && !user.id_instituicao_ensino && (
        <NewCollegeModal
          isOpen={isOpenModal}
          onRequestClose={onClose}
        />
      )}
    </HomeContainer>
  );
};