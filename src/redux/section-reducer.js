import {client} from "../apollo/ApolloClient";
import {PRODUCTS} from "../apollo/ApolloQueries";

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_SECTION = "SET_SECTION"
const SET_FETCHED_CATEGORIES = "SET_FETCHED_CATEGORIES"
const SET_ALL_FETCHED = "SET_ALL_FETCHED"

let initialState = {
    sectionName: {title: "all"},
    products: [],
    fetchedCategories: [],
    isAllFetched: false
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

        case SET_FETCHED_CATEGORIES: {
            debugger
            return {
                ...state,
                fetchedCategories: [...state.fetchedCategories, action.data]
            }
        }

        case SET_PRODUCTS: {
            switch (action.data.name) {
                case ("all"): {
                    return {
                        ...state,
                        products: [...action.data.products]
                    }
                }
                default:
                    debugger
                    return {
                        ...state,
                        products: [...state.products, ...action.data.products]
                    }

            }

        }

        case SET_ALL_FETCHED: {
            return {
                ...state,
                isAllFetched: true
            }
        }

        default:
            return state;
    }
}


export const setUpProducts = (data) => ({type: SET_PRODUCTS, data})
export const setUpSection = (data) => ({type: SET_SECTION, data})
export const setUpFetchedCategories = (data) => ({type: SET_FETCHED_CATEGORIES, data})
export const setUpFetchedAll = () => ({type: SET_ALL_FETCHED})

export const getProducts = (categoryInput) => async (dispatch) => {
    let section = {title: categoryInput}
    client.query({
        query: PRODUCTS,
        variables: {categoryInput: section}
    }).then(result => dispatch(setUpProducts(result.data.category)));
    dispatch(setUpSection(section));
    dispatch(setUpFetchedCategories(categoryInput))
}

export const changeAllFetchedStatus = () => async (dispatch) => {
    dispatch(setUpFetchedAll());
}

export default sectionReducer;