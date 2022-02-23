import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {TotalPriceStyledStyled} from "../styles/TotalPriceStyled.styled";


class TotalPrice extends Component {


    render() {
        return <>
            {this.props.totalPrice === 0 ? <TotalPriceStyledStyled className={"total"}>Total <span
                    className={"price"}/>
                </TotalPriceStyledStyled>
                : <TotalPriceStyledStyled className={"total"}>Total <span
                    className={"price"}>{this.props.currentCurrency} {this.props.totalPrice}</span>
                </TotalPriceStyledStyled>

            }
        </>
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