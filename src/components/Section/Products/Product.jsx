import {ProductStyled} from "../../styles/Product.styled";
import PriceContainer from "./PriceContainer";


const Product = (props) => {
    return <ProductStyled>
        <img src={props.productImage}/>
        <div>
            <span className={"description"}>{props.productName}</span>
        </div>
        <div>
            <PriceContainer prices={props.prices}/>
        </div>
    </ProductStyled>
}

export default Product