import styled from "styled-components";

export const Container = styled.header`
  box-shadow: 0 0 4px 4px #0002;
  background-color: ${({ theme }) => theme.colors.DARK200};
  padding: 0.8rem;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 40vw;
  animation: openSideBar 300ms;

  > .closeIcon {
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 2.4rem;
    cursor: pointer;
    position: absolute;
    top: 2.4rem;
    left: 2.4rem;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 6.8rem;
  }

  .active {
    background: ${({ theme }) => theme.colors.PRIMARY600};
  }

  @keyframes openSideBar {
    from {
      opacity: 0;
      width: 0;
    }

    to {
      opacity: 1;
      width: 40vw;
    }
  }
`;
