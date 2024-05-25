import { Container } from "./style";

type ButtonTypes = {
  title: string;
};

export function ButtonText({ title, ...rest }: ButtonTypes) {
  return <Container {...rest}>{title}</Container>;
}
