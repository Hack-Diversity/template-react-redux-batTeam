// Public routes
const HOME = '/';
<<<<<<< HEAD

// Post routes
const ITEMS = '/books';
const ITEM = '/book/:isbn';
const ITEM_INSERT = '/book/create';
const ITEM_UPDATE = '/book/update/:isbn';

export const routes = {
    HOME,
=======
const ABOUT = '/about';
const SIGN_UP = '/signup';
const LOG_IN = '/login';

// Post routes
const ITEMS = '/items';
const ITEM = '/item/:id';
const ITEM_INSERT = '/item/create';
const ITEM_UPDATE = '/item/update/:id';

export const routes = {
    HOME,
    ABOUT,
    SIGN_UP,
    LOG_IN,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    ITEMS,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
};
