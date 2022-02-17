import {ProductSectionStyled} from "../styles/ProductSection.styled";
import PriceContainer from "../Section/Products/PriceContainer";
import React from "react";
import Attributes from "./Attributes";
import {BuyButtonStyled} from "../styles/BuyButton.styled";
import {NavLink} from "react-router-dom";

const ProductSection = (props) => {
    return <ProductSectionStyled>
        <div className={"gallery"}>
            {props.product.gallery.map(photo => (<div key={photo} className={"imgContainer"} style={{ backgroundImage:  `url(${photo})` }}/>))}
        </div>

        <div className={"mainPhoto"}>
            <img src={props.product.gallery[0]}/>
        </div>

        <div className={"main"}>
            <div>
                <span>{props.product.name}</span>
            </div>
            <div>
                <span>{props.product.brand}</span>
            </div>
            <div className={"attributes"}>
                {props.product.attributes.map(attribute => (
                    <Attributes addAttribute={props.addAttribute} attribute={attribute} key={attribute.id}/>))}
            </div>
            <div>
                <span>PRICE:</span>
                <PriceContainer prices={props.product.prices}/>
            </div>
            <div>
                <NavLink className={"link"} to={'/cart'}>
                    <BuyButtonStyled onClick={() => {
                        props.addProduct(props.product)
                    }}>ADD TO CART</BuyButtonStyled>
                </NavLink>
            </div>
            <div dangerouslySetInnerHTML={{__html: props.product.description}}/>
        </div>
    </ProductSectionStyled>
}

export default ProductSection