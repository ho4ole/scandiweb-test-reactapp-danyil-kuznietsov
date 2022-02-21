import Product from "./Products/Product";
import {ProductsStyled} from "../styles/Products.styled";
import {Container} from "../styles/Container.styled";
import React from "react";


class Section extends React.Component {

    render() {
        return <Container>
            <div>
                <h1>{this.props.categoryName}</h1>
            </div>
            <ProductsStyled>
                {
                    this.props.products.map(product => (
                        <Product key={product.id}  {...product} />))
                }
            </ProductsStyled>
        </Container>
    }
}

export default Section