import { TaskDataTypes } from "../../@types/tasks";
import { Container } from "./style";

type PropsTypes = {
  data: TaskDataTypes;
};

export function TaskCard({ data }: PropsTypes) {
  const { title, description, date, status } = data;
  return (
    <Container>
      <div className={`status ${status}`}>{status}</div>

      <div className="taskDetails">
        <strong>
          {title} <span>{date}</span>
        </strong>
        <p>{description}</p>
      </div>

      <i className="material-icons deleteIcon">delete</i>
    </Container>
  );
}
