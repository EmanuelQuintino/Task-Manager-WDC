import { FormCreateTask } from "../../components/FormCreateTask";
import { Container } from "./style";

export function CreateTasks() {
  return (
    <Container>
      <h2>Adicionar Tarefa</h2>

      <FormCreateTask />
    </Container>
  );
}
