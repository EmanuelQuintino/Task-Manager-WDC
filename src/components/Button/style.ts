import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.PRIMARY500};
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
