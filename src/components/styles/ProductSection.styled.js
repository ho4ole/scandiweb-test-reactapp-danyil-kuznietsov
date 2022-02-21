import styled from "styled-components"

export const ProductSectionStyled = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  width: 1200px;
  max-width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  font-family: 'Raleway', sans-serif;
  line-height: 160%;

  .gallery {
    width: 100px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr;
  }

  .name {
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    padding-bottom: 10px;
  }

  .brand {
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    padding-bottom: 10px;
  }

  .description {
    font-weight: normal;
    font-size: 16px;
    padding-top: 10px;
  }

  .mainPhoto img {
    width: 610px;
    height: 511px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .imgContainer {
    width: 79px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px;
  }

  img {
    width: 175px;
    height: 90px;
    padding: 20px;
  }


`