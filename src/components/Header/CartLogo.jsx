import React from "react";
import {CartLogoStyled} from "../styles/CartLogo.styled";

class CartLogo extends React.Component {
    render() {
        return <CartLogoStyled>
            {this.props.productsCount === 0 ? <img src={this.props.image}/>
                : <div>
                    <img src={this.props.image}/>
                    <div className={"dot"}>
                        <span>{this.props.productsCount}</span>
                    </div>
                </div>

            }
        </CartLogoStyled>
    }
}


export default CartLogo