import styled from "styled-components";

export const Container = styled.main`
  margin-top: 1.2rem;

  h2 {
    font-size: 2.4rem;
  }

  .tasksContainer {
    height: 70vh;
    overflow-y: auto;
    margin-top: 1.2rem;
  }

  @media (min-width: 768px) {
    margin-top: 2.4rem;

    h2 {
      font-size: 2.8rem;
    }

    .tasksContainer {
      height: 60vh;
    }
  }
`;
