const ADD_PRODUCT = "ADD_PRODUCT"
const ADD_QUANTITY = "ADD_QUANTITY"
const MINUS_QUANTITY = "MINUS_QUANTITY"
const INCREASE_TOTAL = "INCREASE_TOTAL"
const DECREASE_TOTAL = "DECREASE_TOTAL"

let initialState = {
    products: [],
    productsCount: 0,
    totalPrice: 0
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT: {

            // I tried to make a product selector, so if we add a product with the same attributes it will be count like old one

           /* state.products.forEach(product => {
             if (product.id === action.data.id) {
                    product.quantity++;
                    action.data.quantity++;
                    return {
                        ...state,
                        products: [...state.products]
                    }
                }
            })*/

            if (action.data.quantity === 1) {
                state.productsCount++;
                return {
                    ...state,
                    products: [...state.products, action.data]
                }
            }
        }

        case INCREASE_TOTAL: {
            state.totalPrice += action.data;
            return {
                ...state,
                totalPrice: state.totalPrice
            }
        }

        case DECREASE_TOTAL: {
            state.totalPrice -= action.data;
            return {
                ...state,
                totalPrice: state.totalPrice
            }
        }

        case ADD_QUANTITY: {
            let index = state.products.indexOf(action.data)
            state.products[index].quantity++;
            state.productsCount++;
            return {
                ...state,
                products: [...state.products]
            }
        }

        case MINUS_QUANTITY: {
            let index = state.products.indexOf(action.data)
            state.products[index].quantity--;
            state.productsCount--;
            if (state.products[index].quantity === 0) {
                state.products.splice(index, 1)
            }
            return {
                ...state,
                products: [...state.products]
            }
        }

        default:
            return state;
    }
}


export const setUpProduct = (data) => ({type: ADD_PRODUCT, data})
export const setUpMinusQuantity = (data) => ({type: MINUS_QUANTITY, data})
export const setUpAddQuantity = (data) => ({type: ADD_QUANTITY, data})
export const setUpIncreaseTotal = (data) => ({type: INCREASE_TOTAL, data})
export const setUpDecreaseTotal = (data) => ({type: DECREASE_TOTAL, data})

export const addProduct = (product) => (dispatch) => {
    dispatch(setUpProduct(product));
}

export const minusQuantity = (product) => (dispatch) => {
    dispatch(setUpMinusQuantity(product));
}

export const addQuantity = (product) => (dispatch) => {
    dispatch(setUpAddQuantity(product));
}

export const addTotal = (price) => (dispatch) => {
    debugger
    dispatch(setUpIncreaseTotal(price));
}

export const minusTotal = (price) => (dispatch) => {
    dispatch(setUpDecreaseTotal(price));
}

export default cartReducer;