


// STEP 3 DEFINE REDUCERS
export default function booksReducers(state = {
    books: []
    
}, action) {
    switch (action.type) {
        case 'GET_CATEGORY':
        return {...state, books: [...action.payload]}

        case 'GET_BOOKS':
            return { ...state, books: [...action.payload] }
        case "POST_BOOK":
           
            return { books: [...state.books, action.payload] }
        case "DELETE_BOOK":
            const bookToDelete = [...state.books]
          
            const indexToDelete = bookToDelete.findIndex(
                function (book) {
                    return book._id == action.payload
                }
            )
            return { books: [...bookToDelete.slice(0, indexToDelete), ...bookToDelete.slice(indexToDelete + 1)] }
        case "UPDATE_BOOK":
            const book2update = [...state.books]
            const index2Update = book2update.findIndex(
                function (book) {
                    return book._id === action.payload;

                }
            )
            const newBookToUpdate = {
                ...book2update[index2Update],
                title: action.payload.title
            }
            console.log('The New Book Update is ', newBookToUpdate)
            return { books: [...book2update.slice(0, index2Update), newBookToUpdate, ...book2update.slice(index2Update + 1)] }

        default:
            return state
    }
}