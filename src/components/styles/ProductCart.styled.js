import styled from "styled-components"

export const ProductCartStyled = styled.div`

  width: 1097px;
  max-width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  justify-content: center;


  .product {
    border-bottom: 1px solid #E5E5E5;
    display: grid;
    height: 190px;
    grid-template-columns: 1fr  1fr;
  }

  .quantity {
    position: absolute;
    bottom: 80px;
    left: 20px;
    
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;

    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .plusB {
    font-size: 25px;
    color: black;
  }
  
  .minusB {
    position: absolute;
    bottom: 10px;
    font-size: 25px;
    color: black;
  }
  
  .attributes {
    display: flex;
    flex-flow: row;
    width: 80px;
  }

  .productCount {
    width: 200px;
    position: relative;
    left: 400px;
    display: flex;
    flex-flow: row;
  }

  .productInterface {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 160px;
    width: 50px;
    font-weight: 200;
  }

  .imgContainer {
    position: absolute;
    object-fit: cover;
    left: 50px;
    z-index: 0;
    width: 141px;
    height: 185px;
  }
  
  .arrowRight {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    bottom: 80px;
    left: 50px;
  }
  
  .arrowLeft {
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    right: 10px;
    bottom: 80px;
  }

  .productInterface button {
    border: 1px solid #1D1F22;
    background-color: white;
    box-sizing: border-box;
    width: 45px;
    height: 45px;
  }
  

`
