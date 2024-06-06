import { CardStyleType, Container } from "./style";

type StatsCardTypes = {
  title: string;
  icon: string;
  number?: number;
  variant?: CardStyleType;
  onClick?: () => void;
};

export function StatsCard({
  title,
  icon,
  number,
  variant = "neutral",
  onClick,
}: StatsCardTypes) {
  return (
    <Container variant={variant} onClick={onClick}>
      <div>
        <h3>{title}</h3>
        <p>{number || "-"}</p>
      </div>
      <i className="material-icons deleteIcon">{icon}</i>
    </Container>
  );
}
