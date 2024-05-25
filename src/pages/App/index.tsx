import { Outlet } from "react-router-dom";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      <h1>App</h1>
      {/* outlet is main */}
      <Outlet />
    </Container>
  );
}
