import * as types from '../actions/actionTypes';

const initialState = {
    loading: false,
    loaded: false,
<<<<<<< HEAD
    books: [],
    book: null
=======
    items: [],
    item: null
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_SINGLE_ITEM:
        case types.LOADING_ALL_ITEMS:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case types.SET_ALL_ITEMS:
            return {
                ...state,
                loading: false,
                loaded: true,
<<<<<<< HEAD
                books: action.books
=======
                items: action.items
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            };
        case types.GET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
<<<<<<< HEAD
                book: action.book
=======
                item: action.item
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            };
        case types.SET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
<<<<<<< HEAD
                books: [ ...state.books, action.book ],
                book: action.book
            };
        case types.UPDATE_SINGLE_ITEM:
            console.log('initial:')
            console.log(state.books);
            let newItems = state.books.map((book, i) => {
                if (book.isbn === action.item.isbn) {
                    book = action.book;
                }
                return book;
=======
                items: [ ...state.items, action.item ],
                item: action.item
            };
        case types.UPDATE_SINGLE_ITEM:
            console.log('initial:')
            console.log(state.items);
            let newItems = state.items.map((item, i) => {
                if (item._id === action.item._id) {
                    item = action.item;
                }
                return item;
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            });
            console.log('altered:')
            console.log(newItems);
            return {
                ...state,
                loading: false,
                loaded: true,
<<<<<<< HEAD
                books: newItems,
                book: action.book
=======
                items: newItems,
                item: action.item
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            };
        // TODO: after users are created
        // case types.FETCH_USER_ITEM:
        //   return { ...state, item: action.item }
        default:
            return state;
    }
}

export default itemReducer;
