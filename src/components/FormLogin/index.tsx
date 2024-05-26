import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";

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

  const navigate = useNavigate();
  const { signIn, isLoading } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    signIn({ email, password });
    reset();
  };

  return (
    <Container>
      <h2>Login</h2>

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

      <ButtonText title="Cadastrar" onClick={() => navigate("/signup")} />
    </Container>
  );
}
