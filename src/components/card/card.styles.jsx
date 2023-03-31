import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.color};
  max-width: 100%;
  min-height: 130px;
  max-height: 250px;
  user-select: none;
  display: flex;
  justify-content: center;
  font-size: 2em;
  align-items: center;
  border-radius: 5px;
  border: 3px solid rgba(255, 255, 255, 0.55);
  transition: transform 0.05s linear;
  cursor: pointer;
  &:active {
    filter: brightness(0.85);
    transform: scale(1.02);
  }
`;
