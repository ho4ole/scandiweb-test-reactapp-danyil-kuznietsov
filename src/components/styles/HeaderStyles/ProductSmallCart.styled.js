import styled from "styled-components"

export const ProductSmallCartStyled = styled.div`

  @import url('${"https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"}');
  
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
  justify-content: center;
  
  .product {
    border-bottom: 1px solid #E5E5E5;
    display: grid;
    grid-template-columns: 1fr  2fr;

    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: lighter;
    font-size: 16px;
    align-items: center;
  }
  
  .productInfo {
   padding: 10px;
    line-height: 20px;
  }
  
  .attributes {
    display: flex;
    flex-flow: column;
    max-width: 300px;
    text-align: left;
  }
  
  .productCount {
    width: 100px;
    position: relative;
    left: 30px;
    display: flex;
    flex-flow: row;
  }
  
  .quantity {
    position: absolute;
    top: 80px;
  }

  .arrowRight {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    bottom: 80px;
    left: 30px;
  }

  .arrowLeft {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    left: 120px;
    bottom: 80px;
  }

  .minusB {
    position: absolute;
    bottom: 0;
  }

  .productInterface {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
  }
  
  .productInterface button {
    border: 1px solid #1D1F22;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    background-color: white;
  }

  .imgContainer {
    object-fit: cover;
    width: 108px;
    height: 190px;
    padding-left: 2px;
  }
  
  
`
