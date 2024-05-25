import { Container } from "./style";
import { FormSignUp } from "../../components/FormSignUp";
import logoRJ from "../../assets/logo-rj.png";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <img src={logoRJ} alt="logo-RJ" />
        </div>
      </div>
    </Container>
  );
}
