import styled from "styled-components"

export const ProductStyled = styled.div`
  
  margin: 20px;
  max-width: 300px;
  
  img {
    width: 300px;
    height: 300px;
  }

  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    opacity: 1.1;
    transform: scale(1.1);
  }
`