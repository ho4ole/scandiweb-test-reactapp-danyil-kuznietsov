import React from "react";
import currencyDown from "../../../assets/images/currencyDown.svg"
import currencyUp from "../../../assets/images/currencyUp.svg"
import CurrencyLogo from "./CurrencyLogo";
import {CurrencyDropDownStyled} from "../../styles/CurrenciesStyles/CurrencyDropDown.styled";
import {compose} from "redux";
import {connect} from "react-redux";
import {getCurrencies} from "../../../redux/header-reducer";


class CurrencyContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrencies();
    }

    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
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

                ? <CurrencyDropDown currencies={this.props.currencies} image={currencyUp}
                                    method={this.toggleCurrencyDropDown}/>

                : <CurrencyDropDown currencies={this.props.currencies} image={currencyDown}
                                    method={this.toggleCurrencyDropDown}/>

            }
        </div>

    }
}

const CurrencyDropDown = (props) => {
    return <CurrencyDropDownStyled>
        <div className="dropdown" onMouseEnter={props.method} onMouseLeave={props.method}>
            <CurrencyLogo image={props.image} currentCurrency={"$"}/>
            <div className="dropdown-content">
                <div>
                    {
                        props.currencies.map(u => <a id={props.currencies.indexOf(u)}>{u.label} {u.symbol}</a>)
                    }
                </div>
            </div>
        </div>
    </CurrencyDropDownStyled>
}

let mapStateToProps = (state) => {
    return {
        currencies: state.header.currencies
    }
}

export default compose(
    connect(mapStateToProps, {getCurrencies})
)(CurrencyContainer)
