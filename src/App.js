import HeaderContainer from "./components/Header/HeaderContainer";
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {Component} from "react";
import SectionContainer from "./components/Section/SectionContainer";

class App extends Component {
    debugger

    render() {
        return (
            <Provider store={store}>
                <HeaderContainer/>
                <SectionContainer/>
            </Provider>
        );
    }
}


export default App;