import styled from "styled-components"

export const ProductSmallCartStyled = styled.div`
  
  width: 325px;
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
    flex-flow: column;
    padding: 5px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  
  .productCount {
    width: 100px;
    position: relative;
    left: 30px;
    display: flex;
    flex-flow: row;
  }

  .arrowRight {
    border: 2px solid #FFFFFF;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    bottom: 80px;
    left: 20px;
    background-color: black;
  }

  .arrowLeft {
    border: 2px solid #FFFFFF;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 2;
    position: absolute;
    left: 120px;
    bottom: 80px;
    background-color: black;
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
    width: 105px;
    height: 137px;
    padding-left: 2px;
  }
  
  
`
