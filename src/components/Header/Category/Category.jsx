import {CategoryStyled} from "../../styles/Category.styled";
import {NavLink} from "react-router-dom";
import styles from "../../styles/NavLinkStyled.module.css";

const Category = (props) => {
    return <NavLink className={styles.category} to={"/section/" + props.name}>
        <CategoryStyled key={props.id}>{props.name.toUpperCase()}</CategoryStyled>
    </NavLink>
}

export default Category