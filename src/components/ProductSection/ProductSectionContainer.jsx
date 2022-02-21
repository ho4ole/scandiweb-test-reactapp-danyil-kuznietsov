import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getProduct} from "../../redux/product-reducer";
import ProductSection from "./ProductSection";
import {addProduct} from "../../redux/cart-reducer";


class ProductSectionContainer extends Component {


    componentDidMount() {
        if (!this.props.match.params.productId) {
        } else {
            let productId = this.props.match.params.productId
            this.props.getProduct(productId);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            product: {
                attributes: []
            },
            attributes: []
        }
        this.addProductToCart = this.addProductToCart.bind(this);
        this.addAttribute = this.addAttribute.bind(this);
    }


    addAttribute = (attribute) => {

        this.state.attributes.forEach(
            (existAttribute, index) => {
                if (existAttribute.name === attribute.name) {
                    this.state.attributes.splice(index, 1)
                }
            }
        )
        this.state.attributes.push(attribute);
    }

    replaceAttributes = (product) => {
        if ((product.attributes.length !== 0 && this.state.attributes.length === 0) || (product.attributes.length !== this.state.attributes.length)) {
            alert("You need to select attributes!)")
        } else {
            this.state.product = {...product}
            this.state.product.quantity = 1;
            this.state.product.attributes = [...this.state.attributes]
            return this.state.product
        }
    }

    addProductToCart = (product) => {
        this.props.addProduct(this.replaceAttributes(product))
    }


    render() {
        if (this.props.match.params.productId === this.props.product.id) {
            return (<ProductSection addAttribute={this.addAttribute} addProduct={this.addProductToCart}
                                    product={this.props.product}/>)
        } else {
            return <>
            </>
        }
    }
}

let mapStateToProps = (state) => {
    return {
        product: state.productState.product
    }
}

let withUrlDataProductSectionContainer = withRouter(ProductSectionContainer);

export default compose(
    connect(mapStateToProps, {getProduct, addProduct})
)(withUrlDataProductSectionContainer)