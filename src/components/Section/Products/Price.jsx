import {PriceStyled} from "../../styles/Price.styled";
import {Component} from "react";

class Price extends Component {
    render() {
        return <PriceStyled>
            <span>{this.props.price.currency.symbol}
                {parseFloat(this.props.price.amount).toFixed(2)}</span>
        </PriceStyled>
    }
}

export default Price