import HeaderContainer from "./components/Header/HeaderContainer";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {Component} from "react";
import SectionContainer from "./components/Section/SectionContainer";
import {Route,} from "react-router-dom";
import ProductSectionContainer from "./components/ProductSection/ProductSectionContainer";
import Cart from "./components/Cart/Cart";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <HeaderContainer/>
                <Route path='/section/:sectionName?'
                       render={() => <SectionContainer key={window.location.pathname}/>}/>
                <Route path='/product/:productId?'
                       render={() => <ProductSectionContainer/>}/>
                <Route path='/cart'
                       render={() => <Cart/>}/>
            </Provider>
        );
    }
}


export default App;