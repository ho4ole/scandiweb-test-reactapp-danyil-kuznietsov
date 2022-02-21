import {HeaderStyled, Logo, Nav} from "../styles/HeaderStyles/Header.styled";
import {Container} from "../styles/Container.styled";
import logo from '../../assets/images/logo.svg'
import Category from "./Category/Category";
import CurrencyContainer from "./Currency/CurrencyContainer";
import CartSmall from "./CartSmall";
import {Component} from "react";


class Header extends Component {
    render() {
        return <HeaderStyled>
            <Container>
                <Nav>
                    <div>
                        {
                            this.props.categories.map(u => <Category key={this.props.categories.indexOf(u)}
                                                                     name={u.name}/>)
                        }
                    </div>
                    <Logo src={logo}/>
                    <CurrencyContainer/>
                    <div>
                        <CartSmall/>
                    </div>
                </Nav>
            </Container>
        </HeaderStyled>
    }
}

export default Header