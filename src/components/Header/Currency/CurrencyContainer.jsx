import React from "react";
import currencyDown from "../../../assets/images/currencyDown.svg"
import currencyUp from "../../../assets/images/currencyUp.svg"
import CurrencyLogo from "./CurrencyLogo";
import {CurrencyDropDownStyled} from "../../styles/CurrenciesStyles/CurrencyDropDown.styled";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeCurrency, getCurrencies} from "../../../redux/currency-reducer";


class CurrencyContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrencies();
    }


    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
        this.toggleCurrencyDropDown = this.toggleCurrencyDropDown.bind(this);
    }

    toggleCurrencyDropDown() {
        this.setState({
            isHover: !this.state.isHover
        })
    }


    render() {
        return <div>
            {this.state.isHover

                ? <CurrencyDropDown currentCurrency={this.props.currentCurrency} currencies={this.props.currencies} image={currencyUp} currencyChanger={this.props.changeCurrency}
                                    method={this.toggleCurrencyDropDown}/>

                : <CurrencyDropDown currentCurrency={this.props.currentCurrency} currencies={this.props.currencies} image={currencyDown}
                                    method={this.toggleCurrencyDropDown}/>

            }
        </div>

    }
}

const CurrencyDropDown = ({currencies, image, currencyChanger, method, currentCurrency}) => {
    return <CurrencyDropDownStyled>
        <div className="dropdown" onMouseEnter={method} onMouseLeave={method}>
            <CurrencyLogo image={image} currentCurrency={currentCurrency}/>
            <div className="dropdown-content">
                <div>
                    {
                        currencies.map(currency => <a onClick={() => { currencyChanger(currency.symbol) }} id={currencies.indexOf(currency)}> {currency.symbol} {currency.label}</a>)
                    }
                </div>
            </div>
        </div>
    </CurrencyDropDownStyled>
}

let mapStateToProps = (state) => {
    return {
        currencies: state.currenciesState.currencies,
        currentCurrency: state.currenciesState.currentCurrency
    }
}

export default compose(
    connect(mapStateToProps, {getCurrencies, changeCurrency})
)(CurrencyContainer)
