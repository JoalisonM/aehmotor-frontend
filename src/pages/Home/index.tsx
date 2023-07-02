import {
  Card,
  Input,
  Label,
  Button,
  Select,
  Option,
  CardContainer,
  HomeContainer,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <h1>Minhas Rotas</h1>
      <CardContainer>
        <Card>
          <h2>IFPB - Campus Guarabira</h2>
          <div>
            <span>Turno: Manhã</span>
            <span>Saída: 06:20</span>
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

        <Card>
          <h2>IFPB - Campus Guarabira</h2>
          <div>
            <span>Turno: Tarde</span>
            <span>Saída: 12:30</span>
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
          <Button variant="blue">Pretendo ir</Button>
        </Card>

        <Card>
          <h2>IFPB - Campus Guarabira</h2>
          <div>
            <span>Turno: Noite</span>
            <span>Saída: 18:30</span>
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
          <Button variant="red">Confirmar ida</Button>
        </Card>
      </CardContainer>
    </HomeContainer>
  );
};