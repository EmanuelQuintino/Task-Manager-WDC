import { Container } from "./style";
import { FormSignUp } from "../../components/FormSignUp";
import logoRJ from "../../assets/logo-rj.png";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <div className="signInPart2">
        <FormSignUp />
      </div>

      <div className="signInPart1">
        <div>
          <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
            <img src={logoRJ} alt="logo-RJ" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
