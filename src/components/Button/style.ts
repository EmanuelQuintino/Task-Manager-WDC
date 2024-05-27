import styled from "styled-components";

export type ButtonStyleType = "primary" | "secondary";

type ButtonContainerStyles = {
  variant: ButtonStyleType;
};

const COLORS = {
  primary: "PRIMARY700",
  secondary: "PRIMARY500",
} as const;

export const Container = styled.button<ButtonContainerStyles>`
  background: ${({ theme, variant }) => theme.colors[COLORS[variant]]};
  box-shadow: 1px 1px 1px #0004;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: default;
    filter: brightness(0.8);
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding: 1.2rem;
  }
`;
