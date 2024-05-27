import { Container } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export function FormSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { signUp, isLoading } = useAuth();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async ({ name, email, password }) => {
    try {
      const isUserCreated = await signUp({ name, email, password });
      console.log(isUserCreated);

      if (isUserCreated) {
        navigate("/");
        reset();
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <Container>
      <h2>Crie sua conta</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Nome:
            <input
              type="text"
              placeholder="digite seu nome"
              autoFocus
              {...register("name", {
                required: "Campo obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/i,
                  message: "Apenas letras são permitidas",
                },
              })}
            />
          </label>
          <span className="inputError">{errors.name?.message}</span>
        </section>

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

        <Button title={"Finalizar"} variant="secondary" loading={isLoading} />
      </form>

      <span>Já tem uma conta? </span>

      <ButtonText title="Login" onClick={() => navigate("/")} />
    </Container>
  );
}
