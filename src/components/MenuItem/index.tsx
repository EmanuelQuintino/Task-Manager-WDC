import { Container } from "./style";

type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  title: string;
  icon: string;
};

export function MenuItem({ title, icon, onClick }: MenuItemProps) {
  return (
    <Container onClick={onClick}>
      <i className="material-icons">{icon}</i>
      <span>{title}</span>
    </Container>
  );
}
