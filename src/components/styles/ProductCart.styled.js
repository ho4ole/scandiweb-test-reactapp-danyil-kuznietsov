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
    width: 141px;
    height: 185px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 10px;
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
