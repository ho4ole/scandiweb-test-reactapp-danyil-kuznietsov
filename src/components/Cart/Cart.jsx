import React, {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Container} from "../styles/Container.styled";
import ProductInCart from "./ProductInCart";
import {addQuantity, minusQuantity} from "../../redux/cart-reducer";

class Cart extends Component {

    render() {
        return (
            <Container>
                <div>
                    <div>CART</div>
                    {this.props.products.map(product => <ProductInCart key={product.id}
                                                                       minusQuantity={this.props.minusQuantity}
                                                                       addQuantity={this.props.addQuantity}
                                                                       product={product}/>)}
                </div>
            </Container>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        products: state.cart.products
    }
}

export default compose(
    connect(mapStateToProps, {minusQuantity, addQuantity})
)(Cart)

