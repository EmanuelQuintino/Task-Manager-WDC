import { Container } from "./style";

type ButtonTypes = {
  title: string;
  loading?: boolean;
};

export function Button({ title, loading = false, ...rest }: ButtonTypes) {
  return (
    <Container disabled={loading} {...rest}>
      {loading ? "Loading..." : title}
    </Container>
  );
}
