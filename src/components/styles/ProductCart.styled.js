import styled from "styled-components"

export const ProductCartStyled = styled.div`

  width: 1097px;
  max-width: 100%;
  padding: 10px 0;
  margin: 0 auto;
  justify-content: center;
  border-top: 1px solid #E5E5E5;


  .product {
    border-bottom: 1px solid #E5E5E5;
    display: grid;
    grid-template-columns: 1fr  1fr;
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
  }

  .imgContainer {
    position: absolute;
    object-fit: cover;
    width: 141px;
    height: 150px;
    left: 50px;
    z-index: 0;
  }
  
  .arrowRight {
    border: 2px solid #FFFFFF;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    bottom: 80px;
    left: 50px;
    background-color: black;
  }
  
  .arrowLeft {
    border: 2px solid #FFFFFF;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    right: 50px;
    bottom: 80px;
    background-color: black;
  }

  .productInterface button {
    border: 1px solid #1D1F22;
    background-color: white;
    box-sizing: border-box;
    width: 45px;
    height: 45px;
  }

  img {
    max-width: 100px;
  }

`
