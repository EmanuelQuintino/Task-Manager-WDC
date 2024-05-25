import { Outlet } from "react-router-dom";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      {/* outlet is main */}
      <Outlet />
    </Container>
  );
}
