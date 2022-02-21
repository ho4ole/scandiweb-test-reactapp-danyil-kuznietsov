import {client} from "../apollo/ApolloClient";
import {EXCHANGE_RATES} from "../apollo/ApolloQueries";

const SET_CURRENCIES = "SET_CURRENCIES"
const SET_CURRENT_CURRENCY = "SET_CURRENT_CURRENCY"

let initialState = {
    currencies: [],
    currentCurrency: "$"

};

const currencyReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENCIES: {
            return {
                ...state,
                currencies: [...state.currencies, ...action.data]
            }
        }

        case SET_CURRENT_CURRENCY: {
            return {
                ...state,
                currentCurrency: action.currency
            }
        }


        default:
            return state;
    }
}


export const setUpCurrencies = (data) => ({type: SET_CURRENCIES, data})
export const setUpCurrentCurrencies = (currency) => ({type: SET_CURRENT_CURRENCY, currency})

export const getCurrencies = () => async (dispatch) => {
    client.query({query: EXCHANGE_RATES}).then(result => dispatch(setUpCurrencies(result.data.currencies)));
}

export const changeCurrency = (currency) => (dispatch) => {
    dispatch(setUpCurrentCurrencies(currency));
}

export default currencyReducer;