import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {addTotal, minusTotal} from "../../redux/cart-reducer";
import {PriceStyled} from "../styles/Price.styled";


class PriceInCart extends Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (this.props.price.amount !== prevProps.price.amount || this.props.quantity !== prevProps.quantity) {

            if (this.props.price.currency.symbol !== prevProps.price.currency.symbol) {
                this.props.minusTotal(prevProps.price.amount * prevProps.quantity)
                this.props.addTotal(this.props.price.amount * this.props.quantity)
            } else if (this.props.price.currency.symbol !== prevProps.price.currency.symbol && this.props.quantity >= prevProps.quantity) {
                this.props.minusTotal(prevProps.price.amount)
                this.props.addTotal(this.props.price.amount)
            } else if (this.props.quantity >= prevProps.quantity) {
                this.props.addTotal(this.props.price.amount)
            } else if (this.props.price.currency.symbol !== prevProps.price.currency.symbol && this.props.quantity < prevProps.quantity) {
                this.props.minusTotal(prevProps.price.amount)
            } else if (this.props.quantity < prevProps.quantity) {
                this.props.minusTotal(this.props.price.amount)
            }

        }
    }

    componentWillUnmount() {
        console.log("delete")
        this.props.minusTotal(this.props.price.amount)
    }

    render() {
        return <PriceStyled>
            <span>{this.props.price.currency.symbol} {parseFloat(this.props.price.amount).toFixed(2)}</span>
        </PriceStyled>
    }

}

let mapStateToProps = (state) => {
    return {}
}

export default compose(
    connect(mapStateToProps, {addTotal, minusTotal})
)(PriceInCart)