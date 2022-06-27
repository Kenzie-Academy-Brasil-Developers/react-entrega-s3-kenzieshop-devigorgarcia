import styled from "styled-components";

export const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;

  span {
    font-weight: bolder;
    font-size: 20px;
  }

  button {
    display: flex;
    align-items: center;
    background-color: var(--gold);
    padding: 0.5rem;
    border-radius: 100%;
    width: 32px;
    height: 32px;
    color: var(--white-color);
    border: 0;
    font-size: 18px;
  }
`;