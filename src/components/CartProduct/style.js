import styled from "styled-components";

export const Container = styled.div`
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid black;
    padding-bottom: 1rem;

    span {
      font-weight: bold;
    }
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
  }

    button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gold);
    padding: 0.5rem;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    color: var(--white-color);
    border: 0;
    font-size: 18px;
  }

  span {
    font-weight: bold;
  }

 `;
