import { Container } from "./style";

type MenuProps = {
  title: string;
  icon: string;
};

export function MenuItem({ title, icon }: MenuProps) {
  return (
    <Container>
      <i className="material-icons">{icon}</i>
      <span>{title}</span>
    </Container>
  );
}
