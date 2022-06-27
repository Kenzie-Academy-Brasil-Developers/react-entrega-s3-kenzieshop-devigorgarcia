import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 0.36rem;
  max-width: 600px;

  input {
    border: 0;
    width: 95%;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.5);
  }
`;
