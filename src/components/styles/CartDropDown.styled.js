import styled from "styled-components"

export const CartDropDownStyled = styled.span`
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
    z-index: 3;
  }

  .dropdown-content {
    background-color: white;
    display: none;
    position: absolute;
    min-width: 90px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 100;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  &:hover .overlay {
    display: block;
  }

  .overlay:hover {
    display: none;
  }

  .overlay {
    position: absolute;
    display: none;
    top: 45px;
    left: 0;
    bottom: 200px;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: rgba(57, 55, 72, 0.22);
  }

  button {
    background: #FFFFFF;
    border: 1px solid #1D1F22;
    box-sizing: border-box;
  }

  .checkButton {
    background: #5ECE7B;
    color: white;
  }


  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`