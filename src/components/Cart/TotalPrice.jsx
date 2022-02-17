
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";


class TotalPrice extends Component {


    render() {
        return <span>{this.props.currentCurrency} {this.props.totalPrice}</span>
    }

}

let mapStateToProps = (state) => {
    return {
        totalPrice: state.cart.totalPrice,
        currentCurrency: state.currenciesState.currentCurrency
    }
}


export default compose(
    connect(mapStateToProps, {})
)(TotalPrice)