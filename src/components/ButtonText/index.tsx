import { Container } from "./style";

type ButtonTypes = {
  title: string;
  onClick: () => void;
};

export function ButtonText({ title, onClick, ...rest }: ButtonTypes) {
  return (
    <Container onClick={onClick} {...rest}>
      {title}
    </Container>
  );
}
