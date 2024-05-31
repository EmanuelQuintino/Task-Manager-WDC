import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 80vw;
    margin: 0 auto;
    position: relative;

    section {
      margin-top: 2.4rem;
    }

    .dateTask {
      display: flex;
      align-items: center;
      gap: 2.4rem;

      div:nth-child(1) {
        position: relative;
      }

      div {
        flex: 1;
      }
    }

    label {
      font-size: 1.4rem;
      text-align: left;
      display: block;
    }

    input,
    select {
      background: ${({ theme }) => theme.colors.DARK200};
      box-shadow: 1px 1px 1px #0004;
      border-radius: 0.8rem;
      font-size: 1.4rem;
      padding: 1.2rem;
      width: 100%;
      margin: 0.4rem auto 0;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(0.9);
    }

    input[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(0.9);
    }

    button {
      margin-top: 4.2rem;
    }
  }

  @media (min-width: 768px) {
    form {
      width: 70vw;

      label {
        font-size: 1.6rem;
      }

      input,
      select {
        font-size: 1.6rem;
      }
    }
  }
`;
