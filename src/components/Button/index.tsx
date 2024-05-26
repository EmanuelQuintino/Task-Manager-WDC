import { ButtonStyleType, Container } from "./style";

type ButtonTypes = {
  title: string;
  loading?: boolean;
  variant?: ButtonStyleType;
};

export function Button({ title, loading = false, variant = "primary" }: ButtonTypes) {
  return (
    <Container disabled={loading} variant={variant}>
      {loading ? "Carregando..." : title}
    </Container>
  );
}
