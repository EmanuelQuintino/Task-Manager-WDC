import { FormLogin } from "../../components/FormLogin";
import { Container } from "./style";
import logoReprogramaJucas from "../../assets/logo-reprograma-jucas.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function SignIn() {
  const navigate = useNavigate();
  const { isLoading } = useAuth();

  return (
    <Container>
      <div className="signInLogo">
        <div>
          <h1>Task Manager</h1>
          <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
            <img src={logoReprogramaJucas} alt="logo-reprograma-jucas" />
          </Link>
        </div>
      </div>

      <div className="signInForm">
        <h2>Faça seu login</h2>

        <FormLogin />

        <div className="messageChangePage">
          <span>Não tem uma conta? </span>
          <button onClick={() => navigate("/signup")} disabled={isLoading}>
            Registre-se
          </button>
        </div>
      </div>
    </Container>
  );
}
