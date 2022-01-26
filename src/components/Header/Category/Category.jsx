import {CategoryStyled} from "../../styles/Category.styled";

const Category = (props) => {
    return <CategoryStyled key={props.id}>{props.name.toUpperCase()}</CategoryStyled>
}

export default Category