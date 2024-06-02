import { Pagination } from "../../components/Pagination";
import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./style";

export function Tasks() {
  const { data } = useQueryTasks();
  console.log(data);

  return (
    <Container>
      <div className="headPageTasks">
        <h2>Tarefas</h2>

        <div className="paginationDesktop">
          <Pagination />
        </div>
      </div>

      <div className="tasksContainer">
        {data?.map((task) => {
          return <TaskCard data={task} />;
        })}
      </div>

      <div className="paginationMobile">
        <Pagination />
      </div>
    </Container>
  );
}
