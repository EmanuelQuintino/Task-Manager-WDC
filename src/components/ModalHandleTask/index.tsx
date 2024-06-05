import { Container } from "./style";
import { FormMutationTask } from "../FormMutationTask";

type HandleTaskProps = {
  toggleHandleTask: () => void;
};

export function ModalHandleTask({ toggleHandleTask }: HandleTaskProps) {
  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      toggleHandleTask();
    }
  }

  return (
    <Container onClick={toggleHandleTask}>
      <div className="handleTaskContainer" onClick={toggleHandleTask}>
        <div className="formContainer">
          <div className="headerForm">
            <h2>Detalhes da tarefa</h2>
            <i
              className="material-icons closeIcon"
              onClick={toggleHandleTask}
              onKeyUp={handleKeyUp}
              tabIndex={0}
            >
              close
            </i>
          </div>
          <FormMutationTask isUpdate />
        </div>
      </div>
    </Container>
  );
}
