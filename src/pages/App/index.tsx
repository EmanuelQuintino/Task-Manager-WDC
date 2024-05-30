import { Outlet } from "react-router-dom";
import { Container } from "./style";
import { Header } from "../../components/Header";

export function App() {
  return (
    <Container>
      <Header />
      <Outlet />
      {/* outlet is main */}
    </Container>
  );
}
