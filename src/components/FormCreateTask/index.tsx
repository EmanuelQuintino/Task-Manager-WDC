import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

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

export function FormCreateTask({ isUpdate = false }: PropsToForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({
    title,
    description,
    date,
    time,
    status,
  }) => {
    try {
      // const isTaskCreated = await createTask({
      //   title,
      //   description,
      //   date,
      //   status,
      // });

      const isTaskCreated = false;

      if (isTaskCreated) {
        navigate("/");
        reset();
      }

      const dateAndTime = new Date(
        new Date(date + " " + time).getTime() - 1000 * 60 * 60 * 3 // -3h
      ).toISOString();

      console.log({
        title,
        description,
        date: dateAndTime,
        status,
      });
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

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
              autoFocus
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
