import {ProductCartLogoStyled, ProductStyled} from "../../styles/Product.styled";
import PriceContainer from "./PriceContainer";
import cartIcon from "../../../assets/images/cartIcon.svg"
import {NavLink} from "react-router-dom";


const Product = (props) => {
    return <ProductStyled>
        <NavLink className={"link"} to={'/product/' + props.id}>
            { props.inStock ? <div className={"imgContainer"} style={{ backgroundImage:  `url(${props.productImage})` }}/>
                : <div className={"imgContainerInStock"} style={{ backgroundImage:  `url(${props.productImage})` }}/>
            }

            <div>
                <NavLink to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"}>
                    <ProductCartLogoStyled className={"cartLogo"} src={cartIcon}/>
                </NavLink>

                <span className={"productName"}>{props.productName}</span>
                <PriceContainer prices={props.prices}/>
            </div>
        </NavLink>
    </ProductStyled>;
}
export default Product