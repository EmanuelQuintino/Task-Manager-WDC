import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { useAuth } from "../../hooks/userAuth";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { signIn, isLoading } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    const isUserLogged = await signIn({ email, password });

    if (isUserLogged) {
      reset();
    }
  };

  return (
    <Container>
      <h2>Faça seu login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Email:
            <input
              type="email"
              placeholder="exemplo@email.com"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Endereço de e-mail inválido",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.email?.message}</span>
        </section>

        <section>
          <label>
            Senha:
            <input
              type="password"
              placeholder="mínimo de 7 dígitos"
              {...register("password", {
                required: "Campo obrigatório",
                minLength: {
                  value: 7,
                  message: "A senha deve ter no mínimo 7 dígitos",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./\\[\]-]).+$/,
                  message:
                    "A senha deve ter número, letra maiúscula e caractere especial",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.password?.message}</span>
        </section>

        <Button title={"Login"} loading={isLoading} />
      </form>

      <div className="messageChangePage">
        <span>Não tem uma conta? </span>
        <button onClick={() => navigate("/signup")}>Registre-se</button>
      </div>
    </Container>
  );
}
