import { Outlet } from "react-router-dom";
import { Container } from "./style";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/userAuth";

export function App() {
  const { signOut } = useAuth();
  return (
    <Container>
      <ButtonText title="Logout" onClick={() => signOut()} />
      {/* outlet is main */}
      <Outlet />
    </Container>
  );
}
