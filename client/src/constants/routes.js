// Public routes
const HOME = '/';

// Post routes
const ITEMS = '/books';
const ITEM = '/book/:isbn';
const ITEM_INSERT = '/book/create';
const ITEM_UPDATE = '/book/update/:isbn';

export const routes = {
    HOME,
    ITEMS,
    ITEM,
    ITEM_INSERT,
    ITEM_UPDATE,
};
