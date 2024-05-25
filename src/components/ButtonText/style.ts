import styled from "styled-components";

export const Container = styled.button`
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
