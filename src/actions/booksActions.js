import axios from 'axios'

// GET BOOKS

export function getBooks() {
    return (dispatch) => {
        axios.get('/books')
            .then((res) => {
                dispatch({ type: 'GET_BOOKS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'GET_BOOKS_REJECTED', payload: err })
            })
    }
}

export function getCategory(category) {
    return (dispatch) =>{
        axios.get('/books/' + category)
        .then((res)=>{
            dispatch({
                type : 'GET_CATEGORY',
                payload : res.data
            })
        })
    }
}


// POST A BOOK

export function postBooks(book) {

    return (dispatch) => {
        axios.post('/book', book)
            .then((res) => {
                dispatch({
                    type: 'POST_BOOK',
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({ type: 'POST_BOOK_REJECTED', payload: "There was an error while posting a new book! " + err })
            })
    }
}

// DELETE A BOOK

export function deleteBooks(id) {
    return (dispatch) => {
        axios.delete('/book/' + id)
            .then((res) => {
                dispatch({ type: 'DELETE_BOOK', payload: id })
            })
            .catch((err) => {
                dispatch({ type: 'DELETE_BOOK_REJECTED', payload: err })
            })
    }
}

// UPDATE A BOOK

export function updateBooks(book) {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}