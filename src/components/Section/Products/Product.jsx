import {ProductStyled} from "../../styles/Product.styled";


const Product = (props) => {
    return <ProductStyled>
        <img src={props.productImage}/>
        <div>
            <span className={"description"}>{props.productName}</span>
        </div>
        <div>
            <span className={"price"}>{props.price}</span>
        </div>
    </ProductStyled>
}

export default Product