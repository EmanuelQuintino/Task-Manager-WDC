import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
