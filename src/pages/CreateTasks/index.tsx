import { FormCreateTask } from "../../components/FormCreateTask";
import { Container } from "./style";

export function CreateTasks() {
  return (
    <Container>
      <h2>Adicionar tarefa para realizar</h2>

      <FormCreateTask />
    </Container>
  );
}
