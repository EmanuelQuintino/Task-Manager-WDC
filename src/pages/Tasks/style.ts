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

    display: grid;
    gap: 1.2rem;

    &::-webkit-scrollbar {
      width: 0.75rem;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.DARK200};
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.LIGHT200};
      border-radius: 0.8rem;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.LIGHT400};
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.8rem;
    }

    .tasksContainer {
      height: 60vh;
    }
  }
`;
