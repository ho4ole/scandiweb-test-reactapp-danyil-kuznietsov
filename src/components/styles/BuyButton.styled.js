import styled from "styled-components"

export const BuyButtonStyled = styled.button`

  background: #5ECE7B;
  border: none;
  color: white;
  width: 200px;
  height: 50px;
  max-width: 100%;
  font-size: large;
  cursor: pointer;
  margin-top: 20px;

  &:disabled,
  &[disabled] {
    background-color: #cccccc;
    color: black;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`