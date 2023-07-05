import { useEffect, useState } from "react";
import * as z from "zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { usePretenses } from "../../hooks/usePretense";
import { PretenseProps } from "../../api/pretense";

const newPretenseFormSchema = z.object({
  data_embarque: z.date(),
});

type NewPretenseFormInputs = z.infer<typeof newPretenseFormSchema>

export const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-storage") || "");
  const userId = userInfo.userId;
  const { user } = useAuth();
  const { routes, getRoutes } = useStudents();
  const { createPretense, fetchPretenses, patchPretense, pretense, setPretense } = usePretenses();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
  } = useForm<NewPretenseFormInputs>({
    resolver: zodResolver(newPretenseFormSchema),
  });

  useEffect(() => {
    setPretense({} as PretenseProps);
  }, []);

  useEffect(() => {
    setValue("data_embarque", pretense.data_embarque);
  }, [pretense]);

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

  console.log(pretense);

  const handleSubmitPretense = async (data: NewPretenseFormInputs) => {
    const formattedDateString = format(data.data_embarque, "yyyy-MM-dd HH:mm:ss");

    if (!pretense.id) {
      await createPretense({
        id_aluno: user.id,
        id_viagem: 1,
        embarque: false,
        data_embarque: formattedDateString,
      });
    } else {
      await patchPretense(pretense.id);
    }
  };

  return (
    <HomeContainer>
      <h1>Minhas Rotas</h1>
      <CardContainer onSubmit={handleSubmit(handleSubmitPretense)}>
        {routes && routes.map((route) => (
          <Card key={route.turno}>
            <h2>{route.nome_instituicao_ensino}</h2>
            <div>
              <span>Turno: {route.turno}</span>
              <span>Saída: {route.horario_saida}</span>
            </div>
            <fieldset>
              <Label htmlFor="dia">Dia:</Label>
              <Input
                id="dia"
                type="datetime-local"
                {...register("data_embarque", { valueAsDate: true })}
              />
            </fieldset>
            { pretense && !pretense.id &&
              <Button variant="blue" type="submit">Pretendo ir</Button>
            }
            {
              pretense && pretense.id &&
                <Button variant="red" type="submit">Confirmar presença</Button>
            }
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