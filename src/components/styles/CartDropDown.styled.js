import styled from "styled-components"

export const CartDropDownStyled = styled.span`
  
  
  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .dropdown-content {
    background-color: white;
    display: none;
    position: absolute;
    min-width: 90px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
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