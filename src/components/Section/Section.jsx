import Product from "./Products/Product";
import {ProductsStyled} from "../styles/Products.styled";
import {Container} from "../styles/Container.styled";
import React from "react";


const Section = (props) => {
    return <Container>
        <div>
            <h1>{props.categoryName}</h1>
        </div>
        <ProductsStyled>
            {
                props.products.map(product => (<Product key={product.id} prices={product.prices} productName={product.name} productImage={product.gallery[0]} />))
            }
            </ProductsStyled>
    </Container>
}

export default Section