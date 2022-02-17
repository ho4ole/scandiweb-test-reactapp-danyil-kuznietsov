import React from "react";
import {CartLogoStyled} from "../styles/CartLogo.styled";

const CartLogo = (props) => {
    return <CartLogoStyled>
        {props.productsCount === 0 ? <img src={props.image}/>
            : <div>
                <img src={props.image}/>
                <div className={"dot"}>
                    <span>{props.productsCount}</span>
                </div>
            </div>

        }
    </CartLogoStyled>
}


export default CartLogo