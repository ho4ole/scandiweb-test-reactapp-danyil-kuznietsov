
import {CATEGORIES, EXCHANGE_RATES} from "../apollo/ApolloQueries";
import {client} from "../apollo/ApolloClient";

const SET_CATEGORIES = "SET_CATEGORIES"
const SET_CURRENCIES = "SET_CURRENCIES"

let initialState = {
    categories: [],
    currencies: []
};

const headerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: [...state.categories, ...action.data]
            }
        }
        case SET_CURRENCIES: {
            return {
                ...state,
                currencies: [...state.currencies, ...action.data]
            }
        }

        default:
            return state;
    }
}


export const setUpCategories = (data) => ({type: SET_CATEGORIES, data})
export const setUpCurrencies = (data) => ({type: SET_CURRENCIES, data})

export const getCategories = () => async (dispatch) => {
    client.query({query: CATEGORIES}).then(result => dispatch(setUpCategories(result.data.categories)));
}

export const getCurrencies = () => async (dispatch) => {
    client.query({query: EXCHANGE_RATES}).then(result => dispatch(setUpCurrencies(result.data.currencies)));
}

export default headerReducer;