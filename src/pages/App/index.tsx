import { Outlet } from "react-router-dom";
import { Container } from "./style";
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
      <button onClick={logoutApp}>Logout</button>
      {/* outlet is main */}
    </Container>
  );
}
