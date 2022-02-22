import React, {Component} from "react";
import SelectedAttributes from "./SelectedAttributes";
import {ProductSmallCartStyled} from "../styles/HeaderStyles/ProductSmallCart.styled";
import PriceInSmallCartContainer from "./PriceInSmallCartContainer";
import vectorRight from "../../assets/images/VectorRight.svg";
import vectorLeft from "../../assets/images/VectorLeft.svg";

class ProductInSmallCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            mainPhoto: this.props.product.gallery[0]
        }
    }

    changePhotoLeft = () => {
        console.log(this.state.photoIndex)
        let index = this.state.photoIndex
        if (this.state.photoIndex === 0) {
            index = 0;
        } else {
            index--;
        }
        this.setState({
            photoIndex: index,
            mainPhoto: this.props.product.gallery[index]
        })
    }

    changePhotoRight = () => {
        console.log(this.state.photoIndex)
        let index = this.state.photoIndex
        if (this.state.photoIndex === this.props.product.gallery.length - 1) {
            index = this.props.product.gallery.length - 1;
        } else {
            index++;
        }

        this.setState({
            photoIndex: index,
            mainPhoto: this.props.product.gallery[index]
        })
    }

    render() {
        return (
            <ProductSmallCartStyled>
                <div className={"product"}>
                    <div className={"productInfo"}>
                        <span>{this.props.product.name}</span> <br/>
                        <span>{this.props.product.brand}</span>
                        <PriceInSmallCartContainer prices={this.props.product.prices}
                                                   quantity={this.props.product.quantity}/>
                        <div className={"attributes"}>
                            {this.props.product.attributes.map(attribute => (
                                <SelectedAttributes attribute={attribute} key={attribute.id}/>))}
                        </div>
                    </div>
                    <div className={"productCount"}>
                        <div className={"productInterface"}>
                            <button onClick={() => this.props.addQuantity(this.props.product)}>+</button>
                            <span>{this.props.product.quantity}</span>
                            <button onClick={() => this.props.minusQuantity(this.props.product)}>-</button>
                        </div>
                        <div>
                            <img alt={"productPhoto"} className={"imgContainer"} src={this.state.mainPhoto}/>
                            <img alt={"arrow right"} onClick={() => {
                                this.changePhotoLeft()
                            }} className={"arrowRight"}
                                 src={vectorRight}/>
                            <img alt={"arrow left"} onClick={() => {
                                this.changePhotoRight()
                            }} className={"arrowLeft"}
                                 src={vectorLeft}/>
                        </div>
                    </div>
                </div>
            </ProductSmallCartStyled>
        )
    }

}


export default ProductInSmallCart

