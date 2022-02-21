import styled from "styled-components"

export const SelectedAttributeStyled = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
  
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  
  .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }
  
  a {
   justify-content: center;
  }
  
  input {
    display: none;
  }
  
 input:checked + span{
   background: black;
   color: white;
 }

  .dotInput:checked + span{
    background: green;
    color: green;
    outline: max(2px, 0.15em) solid green;
  }

  span {

    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    
    align-items: center;
    
    margin: 10px;
    width: 64px;
    height: 25px;
    border: 1px solid ;
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
  }
  
`

export const AttributesFormStyled = styled.form`
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  
    
`