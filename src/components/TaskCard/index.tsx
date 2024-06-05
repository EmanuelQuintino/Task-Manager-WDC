import { TaskDataTypes } from "../../@types/tasks";
import { updateDate3HoursAgo } from "../../utils/updateDate3HoursAgo";
import { Container } from "./style";

type PropsTypes = {
  data: TaskDataTypes;
  onClick: () => void;
};

export function TaskCard({ data, onClick }: PropsTypes) {
  const { title, description, date, status } = data;

  const dateNow = updateDate3HoursAgo(new Date());
  const taskStatus =
    status == "completed" ? status : new Date(date) < dateNow ? "late" : "pending";

  return (
    <Container onClick={onClick}>
      <div className={`status ${taskStatus}`}>{taskStatus}</div>

      <div className="taskDetails">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <span>{new Date(date).toLocaleString()}</span>
    </Container>
  );
}
