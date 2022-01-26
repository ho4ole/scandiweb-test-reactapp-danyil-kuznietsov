import {HeaderStyled, Logo, Nav} from "../styles/HeaderStyles/Header.styled";
import {Container} from "../styles/Container.styled";
import logo from '../../assets/images/logo.svg'
import Category from "./Category/Category";
import CurrencyContainer from "./Currency/CurrencyContainer";


const Header = (props) => {
    return <HeaderStyled>
        <Container>
            <Nav>
                <div>
                    {
                       props.categories.map(u => <Category id={props.categories.indexOf(u)} name={u.name}/> )
                    }
                </div>
                <Logo src={logo}/>
                 <CurrencyContainer currencies={props.currencies}/>
            </Nav>
        </Container>
    </HeaderStyled>
}

export default Header