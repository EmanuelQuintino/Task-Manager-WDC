import { FormMutationTask } from "../../components/FormMutationTask";
import { Container } from "./style";

export function CreateTasks() {
  return (
    <Container>
      <h2>Adicionar Tarefa</h2>
      <FormMutationTask />
    </Container>
  );
}
