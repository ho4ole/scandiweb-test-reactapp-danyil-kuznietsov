import styled from "styled-components"

export const ProductStyled = styled.div`
  
  margin: 20px;
 
  .productName {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
  }
  
  .imgContainer {
    width: 360px;
    height: 338px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .imgContainerInStock {
    width: 360px;
    height: 338px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
  }
  
  .link {
    text-decoration: none;
    color: black;
  }
  
  .cartLogo {
    display: none;
  }

  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    opacity: 1.1;
    transform: scale(1.1);
  }
  
  &:hover .cartLogo {
    display: block;
  }
`

export const ProductCartLogoStyled = styled.img`
  position: absolute;
  max-width: 50px;
  max-height: 50px;
  padding-left: 300px;
  
  
`