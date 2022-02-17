import React, {Component} from "react";
import SelectedAttributes from "./SelectedAttributes";
import {ProductSmallCartStyled} from "../styles/HeaderStyles/ProductSmallCart.styled";
import PriceInSmallCartContainer from "./PriceInSmallCartContainer";
class ProductInSmallCart extends Component {

    render() {
        debugger
        return (
            <ProductSmallCartStyled>
                <div className={"product"}>
                 <div className={"productInfo"}>
                     <span>{this.props.product.name}</span> <br/>
                     <span>{this.props.product.brand}</span>
                     <PriceInSmallCartContainer prices={this.props.product.prices} quantity={this.props.product.quantity} />
                     <div className={"attributes"}>
                         { this.props.product.attributes.map(attribute => (<SelectedAttributes attribute={attribute} key={attribute.id}/>)) }
                     </div>
                 </div>

                <div className={"productCount"}>
                    <div className={"productInterface"}>
                        <button onClick={() => this.props.addQuantity(this.props.product)}>+</button>
                        <span>{this.props.product.quantity}</span>
                        <button onClick={() => this.props.minusQuantity(this.props.product)}>-</button>
                    </div>
                    <div className={"imgContainer"} style={{ backgroundImage:  `url(${this.props.product.gallery[0]})` }}/>
                </div>
                </div>
            </ProductSmallCartStyled>
        )
    }

}



export default ProductInSmallCart

