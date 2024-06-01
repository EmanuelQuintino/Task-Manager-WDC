import styled from "styled-components";

export const Container = styled.div`
  width: 85vw;
  padding: 1.2rem;
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.colors.DARK400};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    filter: brightness(1.1);
  }

  .status {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 100%;
    display: grid;
    place-content: center;
    cursor: pointer;
  }

  .completed {
    background: ${({ theme }) => theme.colors.CHECK}AA;
  }

  .pending {
    background: ${({ theme }) => theme.colors.DANGER200}AA;
  }

  .taskDetails {
    flex: 1;
    padding: 0 2.4rem;

    strong,
    span {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.LIGHT200};
    }
  }

  .deleteIcon {
    font-size: 2.4rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 75vw;
    padding: 2.5rem;
    margin-top: 1.6rem;

    .status {
      font-size: 0.8rem;
      height: 6.4rem;
      width: 6.4rem;
    }

    .taskDetails {
      strong,
      span {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    .deleteIcon {
      font-size: 2.4rem;
      cursor: pointer;
    }
  }
`;
