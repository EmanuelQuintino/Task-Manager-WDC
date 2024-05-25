import { FormLogin } from "../../components/FormLogin";
import { Container } from "./style";
import logoReprogramaJucas from "../../assets/logo-reprograma-jucas.png";

export function SignIn() {
  return (
    <Container>
      <div className="signInPart1">
        <div>
          <h1>Task Manager</h1>
          <img src={logoReprogramaJucas} alt="logo-reprograma-jucas" />
        </div>
      </div>

      <div className="signInPart2">
        <FormLogin />
      </div>
    </Container>
  );
}
