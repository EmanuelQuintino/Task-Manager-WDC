import { useQueryUser } from "../../hooks/useQueryUser";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryUser();
  console.log(data);

  return (
    <Container>
      <h2>Home</h2>
    </Container>
  );
}
