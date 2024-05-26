import { ButtonStyleType, Container } from "./style";
import loadingGif from "../../assets/loading.gif";

type ButtonTypes = {
  title: string;
  loading?: boolean;
  variant?: ButtonStyleType;
};

export function Button({ title, loading = false, variant = "primary" }: ButtonTypes) {
  return (
    <Container disabled={loading} variant={variant}>
      {loading ? <img src={loadingGif} width={16} /> : title}
    </Container>
  );
}
