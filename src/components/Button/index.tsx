import { ButtonStyleType, Container } from "./style";
import loadingGif from "../../assets/loading.gif";

type ButtonTypes = {
  title: string;
  loading?: boolean;
  variant?: ButtonStyleType;
};

export function Button({ title, loading = false, variant = "PRIMARY700" }: ButtonTypes) {
  return (
    <Container disabled={loading} variant={variant}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
