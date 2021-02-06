import * as types from '../actions/actionTypes';

const initialState = {
    loading: false,
    loaded: false,
    books: [],
    book: null
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
                books: action.books
            };
        case types.GET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
                book: action.book
            };
        case types.SET_SINGLE_ITEM:
            return {
                ...state,
                loading: false,
                loaded: true,
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
            });
            console.log('altered:')
            console.log(newItems);
            return {
                ...state,
                loading: false,
                loaded: true,
                books: newItems,
                book: action.book
            };
        // TODO: after users are created
        // case types.FETCH_USER_ITEM:
        //   return { ...state, item: action.item }
        default:
            return state;
    }
}

export default itemReducer;
