import {CategoryStyled} from "../../styles/Category.styled";
import {NavLink} from "react-router-dom";
import styles from "../../styles/NavLinkStyled.module.css";
import {Component} from "react";

class Category extends Component {
    render() {
        return <NavLink className={styles.category} to={"/section/" + this.props.name}>
            <CategoryStyled key={this.props.id}>{this.props.name.toUpperCase()}</CategoryStyled>
        </NavLink>
    }
}

export default Category