import styled from "styled-components"

export const CurrencyDropDownStyled = styled.span`


  .dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
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

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

`