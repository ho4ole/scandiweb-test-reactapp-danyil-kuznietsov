import styled from "styled-components"

export const ProductSectionStyled = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
  
  width: 1200px;
  max-width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;

  .gallery {
    width: 100px;
    height: 400px;
    display: grid;
    grid-template-columns: 1fr;
  }
  
  .description {
    width: 500px;
    display: grid;
    border: medium double green;
    grid-template-columns: 1fr;
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