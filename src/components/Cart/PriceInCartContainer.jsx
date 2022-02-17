import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Price from "../Section/Products/Price";


class PriceInCartContainer extends Component {

    componentDidMount() {
        this.props.prices.forEach(
            price => {
                if (price.currency.symbol === this.props.currentCurrency) {
                    this.setState({
                        price: price
                    })
                }
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentCurrency !== prevProps.currentCurrency || this.props.prices !== prevState.prices) {
            this.props.prices.forEach(
                price => {
                    if (price.currency.symbol === this.props.currentCurrency) {
                        this.setState({
                            prices: this.props.prices,
                            price: price,
                        })
                    }
                }
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            prices: [],
            price: {
                currency: {
                    label: "USD",
                    symbol: "$"
                },
                amount: ""
            },
        }
    }

    render() {
        return <div>
            <Price price={this.state.price} quantity={this.props.quantity}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        currentCurrency: state.currenciesState.currentCurrency
    }
}


export default compose(
    connect(mapStateToProps, {})
)(PriceInCartContainer)
