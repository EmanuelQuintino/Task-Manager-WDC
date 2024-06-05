import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.DARK700}CC;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  .handleTaskContainer {
    background-color: ${({ theme }) => theme.colors.DARK400};
    box-shadow: 0 0 4px 4px #0002;
    height: 90%;
    width: 80%;
    border-radius: 1.6rem;
    margin: 0 auto;
    padding: 2.4rem;
    display: grid;
    place-content: center;

    .headerForm {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .closeIcon {
        color: ${({ theme }) => theme.colors.LIGHT400};
        font-size: 2.4rem;
        cursor: pointer;
      }
    }
  }

  @media (min-width: 768px) {
  }
`;
