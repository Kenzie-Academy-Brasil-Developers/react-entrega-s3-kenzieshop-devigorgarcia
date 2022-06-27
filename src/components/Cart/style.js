import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2vh;

  h2 {
    color: var(--white-color);
  }

  h3 {
    color: var(--white-color);
  }
`;

export const CartContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 2vw;
    margin-top: 3vw;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: 1rem;
  background-color: var(--grey-color);
  padding: 1rem;
  width: 100vw;
  height: ${(props) => props.height};
  overflow-x: auto;

  h2 {
    text-align: center;
    background-color: var(--red);
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }

  h3 {
    color: var(--blue-color);
    text-align: center;
  }

  ul {
    display: flex;
    gap: 2rem;
    color: var(--blue-color);
  }

  @media (min-width: 1024px) {
    width: 65vw;
    overflow: none;

    ul {
      flex-direction: column;
    }

    li {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-between;

      img {
        max-width: 150px;
      }
    }
  }
`;

export const ResumeContainer = styled.div`
  background-color: var(--gold);
  width: 100vw;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  h2 {
    background-color: var(--red);
    width: 100%;
    text-align: center;
    padding: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    font-weight: bold;

    span {
      color: var(--red);
    }
  }

  @media (min-width: 1024px) {
    width: 30vw;
    height: 100%;
    flex-direction: column;
    margin: 0;
  }
`;
