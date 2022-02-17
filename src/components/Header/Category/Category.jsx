import {CategoryStyled} from "../../styles/Category.styled";
import {NavLink} from "react-router-dom";

const Category = (props) => {
    return <NavLink to={"/section/"+ props.name} style={{textDecoration: "none", color: "black"}} >
    <CategoryStyled  key={props.id}>{props.name.toUpperCase()}</CategoryStyled>
    </NavLink>
}

export default Category