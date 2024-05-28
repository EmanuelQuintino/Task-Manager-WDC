import { Container } from "./style";
import { FormSignUp } from "../../components/FormSignUp";
import logoRJ from "../../assets/logo-rj.png";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="signUpForm">
        <h2>Crie sua conta</h2>

        <FormSignUp />

        <div className="messageChangePage">
          <span>Já tem uma conta? </span>
          <button onClick={() => navigate("/")}>Login</button>
        </div>
      </div>

      <div className="signUpLogo">
        <div>
          <Link to={"https://emanuelquintino.github.io/Page-WDC/"} target="_blank">
            <img src={logoRJ} alt="logo-RJ" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
