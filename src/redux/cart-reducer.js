const ADD_PRODUCT = "ADD_PRODUCT"
const ADD_QUANTITY = "ADD_QUANTITY"
const MINUS_QUANTITY = "MINUS_QUANTITY"
const INCREASE_TOTAL = "INCREASE_TOTAL"
const DECREASE_TOTAL = "DECREASE_TOTAL"

let initialState = {
    products: [],
    productsCount: 0,
    totalPrice: 0.00
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT: {


            debugger

            let newProduct = {...action.data};

            // creating a cartId for products based on their id + selected attributes
            newProduct.cartId = newProduct.id
            newProduct.attributes.forEach(attribute => {
                newProduct.cartId = newProduct.cartId + ` ${attribute.items[0].value}`;
            })

            state.products.forEach(product => {
                if (product.cartId === newProduct.cartId) {
                    product.quantity++;
                    newProduct.quantity++;
                }
            })

            state.productsCount++;

            switch (newProduct.quantity) {
                case 1: {
                    return {
                        ...state,
                        products: [...state.products, newProduct]
                    }
                }

                case 2: {
                    return {
                        ...state,
                        products: [...state.products]
                    }
                }

                default:
                    return state;

            }
        }

        case INCREASE_TOTAL: {
            debugger
            state.totalPrice += parseFloat(action.data.toFixed(2));
            let num = state.totalPrice;
            state.totalPrice = parseFloat(num.toFixed(2));
            return {
                ...state,
                totalPrice: state.totalPrice
            }
        }

        case DECREASE_TOTAL: {
            state.totalPrice -= parseFloat(action.data.toFixed(2));
            let num = state.totalPrice;
            state.totalPrice = parseFloat(num.toFixed(2));
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
    dispatch(setUpIncreaseTotal(price));
}

export const minusTotal = (price) => (dispatch) => {
    dispatch(setUpDecreaseTotal(price));
}

export default cartReducer;

