import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export function Page404() {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={""} alt="page404" />
      <button onClick={() => navigate("/")}>Voltar</button>
    </Container>
  );
}
