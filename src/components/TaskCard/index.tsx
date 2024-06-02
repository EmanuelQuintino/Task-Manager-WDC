import { TaskDataTypes } from "../../@types/tasks";
import { Container } from "./style";

type PropsTypes = {
  data: TaskDataTypes;
};

export function TaskCard({ data }: PropsTypes) {
  const { title, description, date, status } = data;

  const dateNow = new Date();
  const taskStatus =
    status == "completed" ? status : new Date(date) < dateNow ? "late" : "pending";

  return (
    <Container>
      <div className={`status ${taskStatus}`}>{taskStatus}</div>

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
