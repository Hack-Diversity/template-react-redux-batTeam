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

getItemByIsbn = async (req, res) => {
    await Item.find({isbn: req.params.isbn }, (err, items) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 400 in 'getItemByIsbn': ${err}`);
            throw res
                .status(400)
                .json({
                    success: false,
                    error: err,
                });
        }
        if (!items.length) {
            console.error(`[Hack.Diversity React Template] - 404 in 'getItemByIsbn': Item not found`);
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'Item not found',
                });
        }
        console.log(`[Hack.Diversity React Template] - 200 in 'getItemByIsbn': Item fetched!`);
        return res
            .status(200)
            .json({
                success: true,
                item: items[0],
            });
    }).catch(err => {
        console.error(`[Hack.Diversity React Template] - caught error in 'getItemByIsbn': ${err}`);
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
                    isbn: item.isbn,
                    message: 'Book Added!',
                });
        })
        .catch(err => {
            console.error(`[Hack.Diversity React Template] - caught error in 'createItem': ${err.errors.title}`);
            Object.keys(err.errors).forEach(errorKey => {
                console.error(`ERROR for: ${errorKey}`);
                console.error(`=> ${((err.errors[errorKey] || {}).copies || {}).message}`);
            })
            return res
                .status(400)
                .json({
                    success: false,
                    error: err.errors,
                    message: err.errors.title,
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
        console.error(`[Hack.Diversity React Template] - 400 in 'updateItem': You must provide an Book to update.`);
        return res
            .status(400)
            .json({
                success: false,
                error: 'You must provide an item to update.',
            });
    }

    const itemForUpdate = {
        isbn: req.params.isbn, //id
        title: body.title, //name
        author: body.author, //daysOfWeek
        publication_year: body.publication_year, //timeframe
        copies: body.copies, //content
    };

    // console.log('----------------------- updateItem: res -----------------------');
    // console.log(res);

    return Item.updateOne({ isbn: req.params.isbn }, itemForUpdate, (err, writeOpRes) => {
        if (err) {
            console.error(`[Hack.Diversity React Template] - 404 in 'updateItem': Item not found!`);
            console.error(err);
            return res
                .status(404)
                .json({
                    success: false,
                    error: err,
                    message: 'Book not found!',
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
        console.log(`[Hack.Diversity React Template] - 200 in 'updateItem': Book updated!`);
        return res
            .status(200)
            .json({
                success: true,
                isbn: req.params.isbn,
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
    await Item.findOneAndDelete({isbn: req.params.isbn }, (err, item) => {
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
                    error: 'Book not found!',
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
    getItemByIsbn,
    createItem,
    updateItem,
    deleteItem,
};
