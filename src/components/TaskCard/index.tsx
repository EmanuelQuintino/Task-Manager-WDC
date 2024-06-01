import { TaskDataTypes } from "../../@types/tasks";
import { Container } from "./style";

type PropsTypes = {
  data: TaskDataTypes;
};

export function TaskCard({ data }: PropsTypes) {
  const { title } = data;
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
