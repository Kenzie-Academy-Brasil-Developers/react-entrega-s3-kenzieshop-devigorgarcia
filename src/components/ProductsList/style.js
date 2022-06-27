import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 2vh;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 0.5rem;
    margin: 0.3rem;

  }
  
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--yellow-color);
    color: var(--blue-color);
    min-height: 400px;
    min-width: 250px;

    h3 {
      font-size: 22px;
      font-weight: bolder;
      text-align: center;
    }

    img {
      width: 100%;
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 768px) {
      ul {
        flex-direction: row;
        flex-wrap: wrap; 
        align-items: center;
        justify-content: center;
      }

      li {
        
      }
    }
`;


