import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import Price from "./Price";


class PriceContainer extends Component {

    componentDidMount() {
        console.log("Render")
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
        if (this.props.currentCurrency !== prevProps.currentCurrency) {
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
    }

    constructor(props) {
        super(props);
        this.state = {
            price: {
                currency: {
                    label: "USD",
                    symbol: "$"
                },
                amount: 1
            },
        }
    }

    render() {
        return <div>
            <Price price={this.state.price}/>
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
)(PriceContainer)
