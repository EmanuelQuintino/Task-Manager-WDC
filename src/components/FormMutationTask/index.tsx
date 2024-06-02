import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useTaskCreate } from "../../hooks/useTaskCreate";
import { useEffect } from "react";

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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { title, description, date, time, status } = data;

    const dateAndTime = new Date(
      new Date(date + " " + time).getTime() - 1000 * 60 * 60 * 3 // -3h
    ).toISOString();

    mutate({
      title,
      description,
      date: dateAndTime,
      status,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/tasks");
      reset();
    }
  }, [isSuccess, navigate, reset]);

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
                placeholder=""
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
                placeholder=""
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
                <option value="completed">Concluído</option>
              </select>
            </label>
            <span className="inputError">{errors.status?.message}</span>
          </section>
        )}

        <Button
          title={isUpdate ? "Atualizar" : "Adicionar"}
          loading={false}
          variant={isUpdate ? "COMPLEMENTARY" : "PRIMARY700"}
        />
      </form>
    </Container>
  );
}