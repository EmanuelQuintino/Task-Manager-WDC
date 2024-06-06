import { createContext, useState, ReactNode } from "react";
import { TaskDataTypes } from "../@types/tasks";
import { API } from "../configs/api";
import { toast } from "react-toastify";

interface TaskContextProps {
  taskData: TaskDataTypes;
  setTaskData: (task: TaskDataTypes) => void;
  deleteTask: (id: string) => Promise<string | void>;
}

export const TaskContext = createContext({} as TaskContextProps);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [taskData, setTaskData] = useState({} as TaskDataTypes);

  async function deleteTask(id: string) {
    return await API.delete(`/task/${id}`)
      .then((response) => {
        toast.dismiss();
        toast.success(response.data.message || "Tarefa criada com sucesso!");
        return true;
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(
          error.response?.data?.message || "Um erro inesperado aconteceu ao criar tarefa!"
        );
      });
  }

  return (
    <TaskContext.Provider value={{ taskData, setTaskData, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
