import {HeaderStyled, Logo, Nav} from "../styles/HeaderStyles/Header.styled";
import {Container} from "../styles/Container.styled";
import logo from '../../assets/images/logo.svg'
import Category from "./Category/Category";
import CurrencyContainer from "./Currency/CurrencyContainer";
import CartSmall from "./CartSmall";


const Header = (props) => {
    return <HeaderStyled>
        <Container>
            <Nav>
                <div>
                    {
                        props.categories.map(u => <Category key={props.categories.indexOf(u)} name={u.name}/>)
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

export default Header