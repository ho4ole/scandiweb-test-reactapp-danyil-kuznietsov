import {ProductCartLogoStyled, ProductStyled} from "../../styles/Product.styled";
import PriceContainer from "./PriceContainer";
import cartIcon from "../../../assets/images/cartIcon.svg"
import {NavLink} from "react-router-dom";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {addProduct} from "../../../redux/cart-reducer";


class Product extends Component {

    constructor(props) {
        super(props);
    }

    addProductToCart = (product) => {
        if (product.attributes.length) {
            alert("You need to select attributes!)")
        } else {
            let bakedProduct = {...product}
            bakedProduct.quantity = 1;
            this.props.addProduct(bakedProduct);
        }
    }

    render() {
        return <ProductStyled>
            <NavLink className={"link"} to={'/product/' + this.props.id}>
                {this.props.inStock ?
                    <div className={"imgContainer"} style={{backgroundImage: `url(${this.props.gallery[0]})`}}/>
                    : <div className={"imgContainerOutOfStock"}
                           style={{backgroundImage: `url(${this.props.gallery[0]})`}}>
                        <span>OUT OF STOCK</span>
                    </div>
                }

                <div>
                    <span className={"productInfo"}>{this.props.brand} {this.props.name}</span>
                    <PriceContainer prices={this.props.prices}/>
                </div>
            </NavLink>
            {this.props.inStock ? <ProductCartLogoStyled onClick={() => {
                    this.addProductToCart(this.props)
                }} className={"cartLogo"} src={cartIcon}/>
                : <></>
            }
        </ProductStyled>;
    }
}

let mapStateToProps = (state) => {
    return {
        product: state.productState.product
    }
}

export default compose(
    connect(mapStateToProps, {addProduct})
)(Product)





