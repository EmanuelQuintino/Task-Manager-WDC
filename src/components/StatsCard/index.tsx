import { CardStyleType, Container } from "./style";

type StatsCardProps = {
  title: string;
  icon: string;
  number?: number;
  total?: number;
  variant?: CardStyleType;
  onClick?: () => void;
};

export function StatsCard({
  title,
  icon,
  number,
  total,
  variant = "neutral",
  onClick,
}: StatsCardProps) {
  const percentage = number && total ? (number / total) * 100 : null;
  return (
    <Container variant={variant} onClick={onClick}>
      <div>
        <h3>
          {title} {percentage && `(${percentage.toFixed(2)}%)`}
        </h3>
        <p>{number || "-"}</p>
      </div>

      <i className="material-icons">{icon}</i>
    </Container>
  );
}
