import {client} from "../apollo/ApolloClient";
import {PRODUCTS} from "../apollo/ApolloQueries";

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_SECTION = "SET_SECTION"

let initialState = {
    sectionName: {title: "all"},
    products: []

};

const sectionReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SECTION: {
            return {
                ...state,
                sectionName: {
                    title: action.data.title
                }
            }
        }

        case SET_PRODUCTS: {
            return {
                products: [...action.data.products]
            }
        }
        default:
            return state;
    }
}


export const setUpProducts = (data) => ({type: SET_PRODUCTS, data})
export const setUpSection = (data) => ({type: SET_SECTION, data})

export const getProducts = (categoryInput) => async (dispatch) => {
    client.query({query: PRODUCTS, variables: {categoryInput: categoryInput}}).then(result => dispatch(setUpProducts(result.data.category)));
    dispatch(setUpSection(categoryInput));
}

export default sectionReducer;