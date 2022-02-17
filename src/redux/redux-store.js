import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import headerReducer from "./header-reducer";
import sectionReducer from "./section-reducer";
import currencyReducer from "./currency-reducer";
import productReducer from "./product-reducer";
import cartReducer from "./cart-reducer";

let reducers = combineReducers({
    header: headerReducer, section: sectionReducer, currenciesState: currencyReducer, productState: productReducer, cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;