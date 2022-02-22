import styled from "styled-components"

export const ProductStyled = styled.div`

  @import url('${"https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"}');

  margin: 20px;

  .productInfo {
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

  .imgContainerOutOfStock {
    width: 360px;
    height: 338px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
  }

  .imgContainerOutOfStock span {
    position: absolute;
    max-width: 50px;
    max-height: 50px;

    text-align: center;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    padding-left: 150px;
    padding-top: 150px;

    display: flex;
    align-items: center;

    color: #8D8F9A;

  }

  .link {
    text-decoration: none;
    color: black;
  }

  .cartLogo {
    display: none;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
  bottom: 5px;

`