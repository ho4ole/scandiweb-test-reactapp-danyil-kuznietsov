import React, {Component} from "react";
import {ProductCartStyled} from "../styles/ProductCart.styled";
import SelectedAttributes from "./SelectedAttributes";
import PriceInCartContainer from "./PriceInCartContainer";
import vectorRight from "../../assets/images/VectorRight.svg"
import vectorLeft from "../../assets/images/VectorLeft.svg"

class ProductInCart extends Component {


    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            mainPhoto: this.props.product.gallery[0]
        }
    }

    changePhotoLeft = () => {
        let index = this.state.photoIndex;
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
        let index = this.state.photoIndex;
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
            <ProductCartStyled>
                <div className={"product"}>
                    <div className={"productInfo"}>
                        <span>{this.props.product.name}</span> <br/>
                        <span>{this.props.product.brand}</span>
                        <PriceInCartContainer prices={this.props.product.prices}
                                              quantity={this.props.product.quantity}/>
                        <div className={"attributes"}>
                            {this.props.product.attributes.map(attribute => (
                                <SelectedAttributes attribute={attribute} key={attribute.id}/>))}
                        </div>
                    </div>
                    <div className={"productCount"}>
                        <div className={"productInterface"}>
                            <button className={"plusB"} onClick={() => this.props.addQuantity(this.props.product)}>+
                            </button>
                            <span className={"quantity"}>{this.props.product.quantity}</span>
                            <button className={"minusB"}
                                    onClick={() => this.props.minusQuantity(this.props.product)}>-
                            </button>
                        </div>
                        <div>
                            {this.props.product.gallery.length === 1 ?
                                <img alt={"productPhoto"} className={"imgContainer"} src={this.state.mainPhoto}/>
                                : <> <img alt={"productPhoto"} className={"imgContainer"} src={this.state.mainPhoto}/>
                                    <img alt={"arrow right"} onClick={() => {
                                        this.changePhotoLeft()
                                    }} className={"arrowRight"}
                                         src={vectorRight}/>
                                    <img alt={"arrow left"} onClick={() => {
                                        this.changePhotoRight()
                                    }} className={"arrowLeft"}
                                         src={vectorLeft}/> </>
                            }

                        </div>
                    </div>
                </div>
            </ProductCartStyled>
        )
    }

}


export default ProductInCart

