import { ButtonStyleType, Container } from "./style";
import loadingGif from "../../assets/loading.gif";

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  loading?: boolean;
  variant?: ButtonStyleType;
};

export function Button({
  title,
  type = "button",
  loading = false,
  variant = "PRIMARY700",
}: ButtonTypes) {
  return (
    <Container type={type} disabled={loading} variant={variant}>
      {loading ? <img src={loadingGif} width={14} /> : title}
    </Container>
  );
}
