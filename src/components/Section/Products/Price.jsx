import {PriceStyled} from "../../styles/Price.styled";

const Price = (props) => {
    let quantity = 1
    if (props.quantity)
    {
        quantity = props.quantity
    }

    return  <PriceStyled>
        <span>{props.price.currency.symbol} {props.price.amount * quantity}</span>
    </PriceStyled>
}

export default Price