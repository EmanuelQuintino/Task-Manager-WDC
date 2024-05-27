import { Outlet } from "react-router-dom";
import { Container } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/userAuth";

export function App() {
  const { signOut } = useAuth();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      signOut();
    }
  }
  return (
    <Container>
      <Outlet />
      <ButtonText title="Logout" onClick={logoutApp} />
      {/* outlet is main */}
    </Container>
  );
}
