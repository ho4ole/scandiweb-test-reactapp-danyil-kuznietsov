import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {CartDropDownStyled} from "../styles/CartDropDown.styled";
import cartLogo from "../../assets/images/cart.svg"
import CartLogo from "./CartLogo";
import {addQuantity, minusQuantity} from "../../redux/cart-reducer";
import ProductInSmallCart from "../Cart/ProductInSmallCart";
import TotalPrice from "../Cart/TotalPrice";
import {NavLink} from "react-router-dom";


class CartSmall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
        this.toggleCartDropDown = this.toggleCartDropDown.bind(this);
    }

    toggleCartDropDown() {
        this.setState({
            isHover: !this.state.isHover
        })
    }


    render() {
        return <div>
            {this.state.isHover

                ? <CartDropDown products={this.props.products} minusQuantity={this.props.minusQuantity} productsCount={this.props.productsCount}
                                addQuantity={this.props.addQuantity}
                                method={this.toggleCurrencyDropDown}/>

                : <CartDropDown products={this.props.products} minusQuantity={this.props.minusQuantity}
                                addQuantity={this.props.addQuantity}
                                method={this.toggleCurrencyDropDown}  productsCount={this.props.productsCount} />

            }
        </div>

    }
}

const CartDropDown = ({products, method, productsCount, minusQuantity, addQuantity}) => {
    return <CartDropDownStyled>
        <div className="dropdown" onMouseEnter={method} onMouseLeave={method}>
            <CartLogo productsCount={productsCount} image={cartLogo}/>
            <div className="dropdown-content">
                <div>
                    <span>My Bag, </span>
                    <span>{productsCount} items</span>
                </div>
                <div>
                    {products.map(product => <ProductInSmallCart key={product.id} minusQuantity={minusQuantity}
                                                            addQuantity={addQuantity}
                                                            product={product}/>)}
                </div>
                <div>
                   <TotalPrice/>
                </div>
                <div className={"buttons"}>
                    <NavLink className={"link"} to={"/cart"}>
                        <button>VIEW BAG</button>
                    </NavLink>
                    <NavLink to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}>
                        <button className={"checkButton"}>CHECK OUT</button>
                    </NavLink>

                </div>
            </div>
        </div>
    </CartDropDownStyled>
}

let mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        productsCount: state.cart.productsCount
    }
}

export default compose(
    connect(mapStateToProps, {minusQuantity, addQuantity})
)(CartSmall)
