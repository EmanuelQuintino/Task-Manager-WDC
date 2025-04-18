import { TaskDataTypes } from "../../@types/tasks";
import { Container } from "./style";

type TaskCardProps = {
  data: TaskDataTypes;
  onClick: () => void;
};

export function TaskCard({ data, onClick }: TaskCardProps) {
  const { title, description, date, status } = data;

  const isCompleted = status == "completed";
  const isLate = !isCompleted && new Date(date) < new Date();

  const taskStatus = isCompleted ? "completed" : isLate ? "late" : "pending";

  const ptTaskStatus = {
    completed: "Concluída",
    pending: "Pendente",
    late: "Atrasada",
  };

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      onClick();
    }
  }

  return (
    <Container onClick={onClick} onKeyUp={handleKeyUp} tabIndex={0}>
      <div className={`status ${taskStatus}`}>{ptTaskStatus[taskStatus]}</div>

      <div className="taskDetails">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <span>{new Date(date).toLocaleString("pt-BR")}</span>
    </Container>
  );
}
