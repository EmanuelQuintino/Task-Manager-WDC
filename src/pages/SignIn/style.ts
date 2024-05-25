import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .signInPart1 {
    flex: 1;
    text-align: center;

    div {
      text-align: left;
      width: 42rem;
      margin: 0 auto;
    }

    h1 {
      font-size: 3.2rem;
    }

    img {
      width: 42rem;
    }
  }

  .signInPart2 {
    flex: 1;
  }
`;
