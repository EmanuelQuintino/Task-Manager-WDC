import { CardStyleType, Container } from "./style";

type StatsCardTypes = {
  title: string;
  icon: string;
  number?: number;
  variant?: CardStyleType;
};

export function StatsCard({ title, icon, number, variant = "neutral" }: StatsCardTypes) {
  return (
    <Container variant={variant}>
      <div>
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
      <i className="material-icons deleteIcon">{icon}</i>
    </Container>
  );
}
