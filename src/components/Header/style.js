import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background-color: var(--red);
  color: var(--white-color);
  height: 5vh;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  h1 {
    font-size: 16px;
    cursor: pointer;
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    gap: 0.5rem;
    background-color: transparent;
    border: 0;
    color: var(--white-color);
    font-weight: bold;

    span {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -10px;
      right: -30px;
      font-size: 0.9em;
      background-color: var(--gold);
      height: 15px;
      width: 15px;
      border-radius: 50%;
    }

    &:hover {
      color: var(--yellow-color);
    }
  }
`;

export const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem;
`
