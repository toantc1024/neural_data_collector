import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  border: none;
  padding: 10px;
  background-color: dodgerblue;
  font-size: 1em;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 0.55);
  padding: 10px;
  display: flex;
  margin: 20px;
  &:active {
    filter: brightness(0.75);
  }
`;
