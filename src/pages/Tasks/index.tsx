import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./style";

export function Tasks() {
  const { data } = useQueryTasks();
  console.log(data);

  return (
    <Container>
      <h2>Tarefas</h2>

      <div className="tasksContainer">
        {data?.map((task) => {
          return <TaskCard data={task} />;
        })}
      </div>
    </Container>
  );
}
