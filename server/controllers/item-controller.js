/* eslint-disable no-undef, arrow-body-style */
const Item = require('../models/item-model');

getItems = async (req, res) => {
    await Item.find({}, (err, items) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getItems': ${err}`);
            return res
                .status(400)
                .json({
                    success: false,
                    error: err,
                });
        }
        if (!items.length) {
            console.error(`[Hack.Diversity React Template] - 404 in 'getItems': Items not found`);
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Items not found',
                });
        }
        console.log(`[Hack.Diversity React Template] - 200 in 'getItems': Items fetched!`);
        return res
            .status(200)
            .json({
                success: true,
                items: items,
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'getItems': ${err}`);
        console.error(err);
        return res
            .status(404)
            .json({
                success: false,
                error: err
            });
    });
};

<<<<<<< HEAD
getItemByIsbn = async (req, res) => {
    await Item.find({isbn: req.params.isbn }, (err, items) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getItemByIsbn': ${err}`);
=======
getItemById = async (req, res) => {
    await Item.find({ _id: req.params.id }, (err, items) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getItemById': ${err}`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            throw res
                .status(400)
                .json({
                    success: false,
                    error: err,
                });
        }
        if (!items.length) {
<<<<<<< HEAD
            console.error(`[Hack.Diversity React Template] - 404 in 'getItemByIsbn': Item not found`);
=======
            console.error(`[Hack.Diversity React Template] - 404 in 'getItemById': Item not found`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Item not found',
                });
        }
<<<<<<< HEAD
        console.log(`[Hack.Diversity React Template] - 200 in 'getItemByIsbn': Item fetched!`);
=======
        console.log(`[Hack.Diversity React Template] - 200 in 'getItemById': Item fetched!`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        return res
            .status(200)
            .json({
                success: true,
                item: items[0],
            });
    }).catch(err => {
<<<<<<< HEAD
        console.error(`[Hack.Diversity React Template] - caught error in 'getItemByIsbn': ${err}`);
=======
        console.error(`[Hack.Diversity React Template] - caught error in 'getItemById': ${err}`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        console.error(err);
        return err;
    });
};

createItem = (req, res) => {
    const body = req.body;
    // console.log('----------------------- createItem: req -----------------------')
    // console.log(req);
    // console.log('----------------------- createItem: body -----------------------')
    // console.log(body);

    if (!body) {
        return res
            .status(400)
            .json({
                success: false,
                error: 'You must provide an item.',
            });
    }

    const item = new Item(body);

    if (!item) {
        console.error(`[Hack.Diversity React Template] - 400 in 'createItem': 'item' is malformed.`);
        return res
            .status(400)
            .json({
                success: false,
                message: "'item' is malformed"
            });
    }

    // console.log('----------------------- createItem: item -----------------------')
    // console.log(item);

    return item
        .save()
        .then(() => {
            console.error(`[Hack.Diversity React Template] - 201 in 'createItem': Item created!`);
            return res
                .status(201)
                .json({
                    success: true,
<<<<<<< HEAD
                    isbn: item.isbn,
                    message: 'Book Added!',
                });
        })
        .catch(err => {
            console.error(`[Hack.Diversity React Template] - caught error in 'createItem': ${err.errors.title}`);
            Object.keys(err.errors).forEach(errorKey => {
                console.error(`ERROR for: ${errorKey}`);
                console.error(`=> ${((err.errors[errorKey] || {}).copies || {}).message}`);
=======
                    id: item._id,
                    message: 'Item created!',
                });
        })
        .catch(err => {
            console.error(`[Hack.Diversity React Template] - caught error in 'createItem': ${err.errors.name}`);
            Object.keys(err.errors).forEach(errorKey => {
                console.error(`ERROR for: ${errorKey}`);
                console.error(`=> ${((err.errors[errorKey] || {}).properties || {}).message}`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            })
            return res
                .status(400)
                .json({
                    success: false,
                    error: err.errors,
<<<<<<< HEAD
                    message: err.errors.title,
=======
                    message: err.errors.name,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                });
        });
};

updateItem = (req, res) => {
    const body = req.body;
    // console.log('----------------------- updateItem: req -----------------------');
    // console.log(req);
    // console.log('----------------------- updateItem: body -----------------------');
    // console.log(body);
    if (!body) {
<<<<<<< HEAD
        console.error(`[Hack.Diversity React Template] - 400 in 'updateItem': You must provide an Book to update.`);
=======
        console.error(`[Hack.Diversity React Template] - 400 in 'updateItem': You must provide an item to update.`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        return res
            .status(400)
            .json({
                success: false,
                error: 'You must provide an item to update.',
            });
    }

    const itemForUpdate = {
<<<<<<< HEAD
        isbn: req.params.isbn, //id
        title: body.title, //name
        author: body.author, //daysOfWeek
        publication_year: body.publication_year, //timeframe
        copies: body.copies, //content
=======
        _id: req.params.id,
        name: body.name,
        daysOfWeek: body.daysOfWeek,
        timeframeNote: body.timeframeNote,
        priority: body.priority,
        content: body.content,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    };

    // console.log('----------------------- updateItem: res -----------------------');
    // console.log(res);

<<<<<<< HEAD
    return Item.updateOne({ isbn: req.params.isbn }, itemForUpdate, (err, writeOpRes) => {
=======
    return Item.updateOne({ _id: req.params.id }, itemForUpdate, (err, writeOpRes) => {
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        if (err) {
            console.error(`[Hack.Diversity React Template] - 404 in 'updateItem': Item not found!`);
            console.error(err);
            return res
                .status(404)
                .json({
                    success: false,
                    error: err,
<<<<<<< HEAD
                    message: 'Book not found!',
=======
                    message: 'Item not found!',
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                });
        }
        // TODO: make this neater
        // console.log('----------------------- updateItem: item -----------------------');
        // console.log(item);
        return writeOpRes;
    })
    .then(res => {
        // console.log('----------------------- updateItem - findOne: res -----------------------');
        // console.log(res);
<<<<<<< HEAD
        console.log(`[Hack.Diversity React Template] - 200 in 'updateItem': Book updated!`);
=======
        console.log(`[Hack.Diversity React Template] - 200 in 'updateItem': Item updated!`);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        return res
            .status(200)
            .json({
                success: true,
<<<<<<< HEAD
                isbn: req.params.isbn,
=======
                id: req.params.id,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                message: 'Item updated!',
                writeOpResult: res
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'updateItem': ${err}`);
        console.error(err);
        return err;
    });
};

deleteItem = async (req, res) => {
<<<<<<< HEAD
    await Item.findOneAndDelete({isbn: req.params.isbn }, (err, item) => {
=======
    await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'deleteItem': ${err}`);
            return res
                .status(400)
                .json({
                    succes: false,
                    error: err,
                });
        }

        if (!item) {
            console.error(`[Hack.Diversity React Template] - 400 in 'deleteItem': Item not found!`);
            return res
                .status(400)
                .json({
                    success: false,
<<<<<<< HEAD
                    error: 'Book not found!',
=======
                    error: 'Item not found!',
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
                });
        }

        return res
            .status(200)
            .json({
                success: true,
                item: item,
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'deleteItem': ${err}`);
        console.error(err);
        return err;
    });
};

module.exports = {
    getItems,
<<<<<<< HEAD
    getItemByIsbn,
=======
    getItemById,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    createItem,
    updateItem,
    deleteItem,
};
