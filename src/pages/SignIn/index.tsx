import { FormLogin } from "../../components/FormLogin";
import { Container } from "./style";
import logoReprogramaJucas from "../../assets/logo-reprograma-jucas.png";
import { Link } from "react-router-dom";

export function SignIn() {
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
        <FormLogin />
      </div>
    </Container>
  );
}
