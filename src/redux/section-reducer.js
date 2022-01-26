import {client} from "../apollo/ApolloClient";
import {PRODUCTS} from "../apollo/ApolloQueries";

const SET_PRODUCTS = "SET_PRODUCTS"

let initialState = {
    sectionName: "",
    products: []

};

const sectionReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: [...state.products, ...action.data.products]
            }
        }
        default:
            return state;
    }
}


export const setUpProducts = (data) => ({type: SET_PRODUCTS, data})

export const getProducts = () => async (dispatch) => {
    client.query({query: PRODUCTS}).then(result => dispatch(setUpProducts(result.data.category)));
}

export default sectionReducer;