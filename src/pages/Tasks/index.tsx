import { Pagination } from "../../components/Pagination";
import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./style";

export function Tasks() {
  const { data, changeLimit, page, totalPages, prevPage, nextPage } = useQueryTasks();

  console.log(data);

  return (
    <Container>
      <div className="headPageTasks">
        <h2>Tarefas</h2>

        <div className="paginationDesktop">
          <Pagination
            page={page}
            step={5}
            totalPages={totalPages}
            prevPage={prevPage}
            nextPage={nextPage}
            changeLimit={changeLimit}
          />
        </div>
      </div>

      {data && data.length == 0 ? (
        <div className="tasksContainer" style={{ placeContent: "center" }}>
          <p className="emptyMessageTasks">Sem tarefas para mostrar</p>
        </div>
      ) : (
        <div className="tasksContainer" style={{ placeContent: "center" }}>
          {data?.map((task) => {
            return <TaskCard data={task} />;
          })}
        </div>
      )}

      <div className="paginationMobile">
        <Pagination
          page={page}
          step={5}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
          changeLimit={changeLimit}
        />
      </div>
    </Container>
  );
}
