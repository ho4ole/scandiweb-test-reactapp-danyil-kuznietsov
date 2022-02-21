import {client} from "../apollo/ApolloClient";
import {PRODUCT} from "../apollo/ApolloQueries";

const SET_PRODUCT = "SET_PRODUCT"


let initialState = {
    product: {
        id: "",
        name: "",
        inStock: true,
        gallery: [],
        description: "",
        attributes: [],
        prices: []
    }

};

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_PRODUCT: {
            return {
                product: action.data,
            }
        }

        default:
            return state;
    }
}


export const setUpProduct = (data) => ({type: SET_PRODUCT, data})

export const getProduct = (productId) => async (dispatch) => {
    client.query({
        query: PRODUCT,
        variables: {id: productId}
    }).then(result => dispatch(setUpProduct(result.data.product)));
}

export default productReducer;


/*
jacket-canada-goosee

huarache-x-stussy-le*/
