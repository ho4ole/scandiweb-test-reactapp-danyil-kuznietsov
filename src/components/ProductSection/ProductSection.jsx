import {ProductSectionStyled} from "../styles/ProductSection.styled";
import PriceContainer from "../Section/Products/PriceContainer";
import React from "react";
import Attributes from "./Attributes";
import {BuyButtonStyled} from "../styles/BuyButton.styled";
import DOMPurify from "dompurify";

class ProductSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainPhoto: this.props.product.gallery[0]
        }
    }

    changeMainPhoto = (photo) => {
        this.setState({
            mainPhoto: photo
        })
    }

    render() {
        return <ProductSectionStyled>
            <div className={"gallery"}>
                {this.props.product.gallery.map(photo => (
                    <div onClick={() => {
                        this.changeMainPhoto(photo)
                    }} key={photo} className={"imgContainer"} style={{backgroundImage: `url(${photo})`}}/>))}
            </div>

            <div className={"mainPhoto"}>
                <img alt={this.state.mainPhoto} src={this.state.mainPhoto}/>
            </div>

            <div className={"main"}>
                <div className={"name"}>
                    <span>{this.props.product.name}</span>
                </div>
                <div className={"brand"}>
                    <span>{this.props.product.brand}</span>
                </div>
                <div className={"attributes"}>
                    {this.props.product.attributes.map(attribute => (
                        <Attributes addAttribute={this.props.addAttribute} attribute={attribute} key={attribute.id}/>))}
                </div>
                <div>
                    <span>PRICE:</span>
                    <PriceContainer prices={this.props.product.prices}/>
                </div>
                <div>
                    {this.props.product.inStock ? <BuyButtonStyled onClick={() => {
                            this.props.addProduct(this.props.product)
                        }}>ADD TO CART</BuyButtonStyled>
                        : <BuyButtonStyled disabled onClick={() => {
                            this.props.addProduct(this.props.product)
                        }}>OUT OF STOCK</BuyButtonStyled>
                    }
                </div>
                <div className={"description"}
                     dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.product.description)}}/>
            </div>
        </ProductSectionStyled>
    }
}

export default ProductSection