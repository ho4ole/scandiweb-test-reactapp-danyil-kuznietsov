import React from "react";
import currencyDown from "../../../assets/images/currencyDown.svg"
import currencyUp from "../../../assets/images/currencyUp.svg"
import CurrencyLogo from "./CurrencyLogo";
import {CurrencyDropDownStyled} from "../../styles/CurrenciesStyles/CurrencyDropDown.styled";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeCurrency, getCurrencies} from "../../../redux/currency-reducer";
import * as PropTypes from "prop-types";


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

                ? <CurrencyDropDown currentCurrency={this.props.currentCurrency} shouldClose={this.state.isHover}
                                    currencies={this.props.currencies} image={currencyUp}
                                    currencyChanger={this.props.changeCurrency}
                                    method={this.toggleCurrencyDropDown}/>

                : <CurrencyDropDown currentCurrency={this.props.currentCurrency} currencies={this.props.currencies}
                                    image={currencyDown}
                                    method={this.toggleCurrencyDropDown}/>

            }
        </div>

    }
}

class CurrencyDropDown extends React.Component {

    render() {
        let {currencies, image, currencyChanger, method, currentCurrency} = this.props;
        return <CurrencyDropDownStyled>
            <div className="dropdown" onMouseEnter={method} onMouseLeave={method}>
                <CurrencyLogo image={image} currentCurrency={currentCurrency}/>
                {this.props.shouldClose ? <div className="dropdown-content">
                        <div>
                            {
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                currencies.map(currency => <a onClick={() => {
                                    currencyChanger(currency.symbol)
                                    method();
                                }} key={currencies.indexOf(currency)}> {currency.symbol} {currency.label}</a>)
                            }
                        </div>
                    </div>

                    : <></>

                }
            </div>
        </CurrencyDropDownStyled>
    }
}

CurrencyDropDown.propTypes = {
    currencies: PropTypes.any,
    image: PropTypes.any,
    currencyChanger: PropTypes.any,
    method: PropTypes.any,
    currentCurrency: PropTypes.any
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
