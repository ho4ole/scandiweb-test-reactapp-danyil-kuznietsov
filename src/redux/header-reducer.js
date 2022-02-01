
import {CATEGORIES, EXCHANGE_RATES} from "../apollo/ApolloQueries";
import {client} from "../apollo/ApolloClient";

const SET_CATEGORIES = "SET_CATEGORIES"

let initialState = {
    categories: [],
};

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: [...state.categories, ...action.data]
            }
        }


        default:
            return state;
    }
}

export const setUpCategories = (data) => ({type: SET_CATEGORIES, data})

export const getCategories = () => async (dispatch) => {
    client.query({query: CATEGORIES}).then(result => dispatch(setUpCategories(result.data.categories)));
}


export default headerReducer;