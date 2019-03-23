import axios from 'axios'

//  GET CART

export function getCart() {
    return (dispatch) => {
        axios.get('/cart')
            .then((res) => {
                dispatch({ type: 'GET_CART', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'GET_CART_REJECTED', payload: "Error while getting cart items from session" +  err })
            })
    }
}




// ADD TO CART

export function addToCart(cart) {
    return (dispatch) => {
        axios.post('/cart', cart)
            .then((res) => {
                dispatch({ type: 'ADD_TO_CART', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'ADD_TO_CART_REJECTED', payload: err })
            })
    }
}

// DELETE CART ITEM

export function deleteCartItem(cart) {
    return (dispatch) => {
        axios.post('/cart', cart)
            .then((res) => {
                dispatch({ type: 'DELETE_CART_ITEM', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'DELETE_CART_ITEM_REJECTED', payload: err })
            })
    }
   
}

export function updateCart(_id, unit, cart) {

    const book2update = cart
    const index2Update = book2update.findIndex(
        function (book) {
            return book._id === _id;

        }
    )
    const newBookToUpdate = {
        ...book2update[index2Update],
        quantity: book2update[index2Update].quantity + unit
    }

    let cartUpdate = [...book2update.slice(0, index2Update), newBookToUpdate, ...book2update.slice(index2Update + 1)]
    return (dispatch) => {
        axios.post('/cart', cartUpdate)
            .then((res) => {
                dispatch({ type: 'UPDATE_CART_ITEM', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'UPDATE_CART_ITEM_REJECTED', payload: err })
            })
    }


}