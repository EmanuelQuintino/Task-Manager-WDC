import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useTaskCreate } from "../../hooks/useTaskCreate";
import { useEffect } from "react";
import { useTask } from "../../hooks/useTask";
import { updateDate3HoursAgo } from "../../utils/updateDate3HoursAgo";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  description: string;
  date: string;
  time: string;
  status: "completed" | "pending";
};

type PropsToForm = {
  isUpdate?: boolean;
};

export function FormMutationTask({ isUpdate = false }: PropsToForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { mutate, isSuccess } = useTaskCreate();
  const navigate = useNavigate();
  const { taskData, deleteTask } = useTask();

  async function handleDeleteTask(id?: string) {
    console.log("id:", id);

    if (id) {
      const resp = confirm("Deseja remover tarefa?");

      if (resp) {
        const isDeleted = await deleteTask(id);
        if (isDeleted) navigate("/tasks");
      }
    } else {
      toast.dismiss();
      toast.error("Tarefa não informada!");
    }
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, description, date, time, status } = data;

    const dateAndTime = new Date(new Date(date + " " + time)).toISOString();

    if (isUpdate) {
      console.log(taskData.id, { ...data, date: dateAndTime });
    } else {
      mutate({
        title,
        description,
        date: dateAndTime,
        status,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/tasks");
      reset();
    }
  }, [isSuccess, navigate, reset]);

  useEffect(() => {
    if (isUpdate) {
      reset({
        title: taskData.title || "",
        description: taskData.description || "",
        date: taskData.date ? new Date(taskData.date).toISOString().split("T")[0] : "",
        time: taskData.date
          ? new Date(taskData.date).toISOString().split("T")[1].slice(0, 5)
          : "",
        status: taskData.status || "pending",
      });
    }
  }, [isUpdate, taskData, reset]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Título:
            <input
              type="text"
              placeholder="digite o título da tarefa"
              autoFocus
              {...register("title", {
                required: "Campo obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              })}
            />
          </label>
          <span className="inputError">{errors.title?.message}</span>
        </section>

        <section>
          <label>
            Descrição:
            <input
              type="text"
              placeholder="descreva a tarefa a ser realizada"
              {...register("description", {
                required: "Campo obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" },
              })}
            />
          </label>
          <span className="inputError">{errors.description?.message}</span>
        </section>

        <section className="dateTask">
          <div>
            <label>
              Data:
              <input
                type="date"
                min={updateDate3HoursAgo(new Date()).toISOString().split("T")[0]} // date now
                {...register("date", {
                  required: "Campo obrigatório",
                })}
              />
            </label>
            <span className="inputError">{errors.date?.message}</span>
          </div>

          <div>
            <label>
              Hora:
              <input
                type="time"
                {...register("time", {
                  required: "Campo obrigatório",
                })}
              />
            </label>
            <span className="inputError">{errors.time?.message}</span>
          </div>
        </section>

        {isUpdate && (
          <section>
            <label>
              Status:
              <select
                {...register("status", {
                  required: "Campo obrigatório",
                })}
              >
                <option value="pending">Pendente</option>
                <option value="completed">Concluída</option>
              </select>
            </label>
            <span className="inputError">{errors.status?.message}</span>
          </section>
        )}

        {isUpdate ? (
          <div className="isUpdateBoxButton">
            <Button
              title={"Atualizar"}
              loading={false}
              variant={"COMPLEMENTARY"}
              type="submit"
            />
            <Button
              title={"Remover"}
              loading={false}
              variant={"DANGER200"}
              type="button"
              onClick={() => handleDeleteTask(taskData.id)}
            />
          </div>
        ) : (
          <Button
            title={"Adicionar"}
            loading={false}
            variant={"PRIMARY700"}
            type="submit"
          />
        )}
      </form>
    </Container>
  );
}
