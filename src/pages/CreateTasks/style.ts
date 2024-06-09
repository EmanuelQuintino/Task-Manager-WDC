import styled from "styled-components";

export const Container = styled.main`
  width: ${({ theme }) => theme.size.MAIN_WIDTH_MOBILE};
  /* height: 70vh; */

  h2 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    width: ${({ theme }) => theme.size.MAIN_WIDTH_DESKTOP};
    height: auto;

    h2 {
      font-size: 2.4rem;
    }
  }
`;
