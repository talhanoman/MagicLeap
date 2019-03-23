
export default function cartReducers(state = { cart: [] }, action) {
    switch (action.type) {
        
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }

        case 'DELETE_CART_ITEM':
            return {
                ...state, cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }


        case 'UPDATE_CART_ITEM':


            return {
                ...state, cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQty: totals(action.payload).qty
            }


        default:
            return state
    }
}

export function totals(payloadArr) {
    const totalAmount = payloadArr.map((cartItem) => {
        return cartItem.price * cartItem.quantity
    }).reduce((a, b) => {
        return a + b
    }, 0); //Start sum from index 0

    const totalQty = payloadArr.map((qty) => {
        return qty.quantity

    }).reduce((a, b) => {
        return a + b
    }, 0)


    return { amount: totalAmount.toFixed(2), qty: totalQty }
}

