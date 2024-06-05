import { useState } from "react";
import { ModalHandleTask } from "../../components/ModalHandleTask";
import { Pagination } from "../../components/Pagination";
import { TaskCard } from "../../components/TaskCard";
import { useQueryTasks } from "../../hooks/useQueryTasks";
import { Container } from "./style";

export function Tasks() {
  const [showModalHandleTask, setShowModalHandleTask] = useState(false);

  function toggleHandleTask() {
    setShowModalHandleTask((prevState) => (prevState == true ? false : true));
  }

  const {
    data,
    isLoading,
    error,
    changeLimit,
    page,
    changePage,
    totalPages,
    prevPage,
    nextPage,
  } = useQueryTasks();

  if (totalPages > 0 && page > totalPages) {
    changePage(totalPages);
  }

  return (
    <Container>
      <div className="headPageTasks">
        <h2>Lista</h2>

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

      {isLoading && <span className="loading">Carregando...</span>}
      {!isLoading && error && <span className="loading">Erro...</span>}

      <div className="tasksContainer">
        {data?.length == 0 ? (
          <p className="loading">Sem tarefas para mostrar</p>
        ) : (
          data?.map((task) => {
            return <TaskCard data={task} key={task.id} onClick={toggleHandleTask} />;
          })
        )}
      </div>

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

      {showModalHandleTask && <ModalHandleTask toggleHandleTask={toggleHandleTask} />}
    </Container>
  );
}
