const express = require('express');
<<<<<<< HEAD
const ItemController = require('../controllers/item-controller.js');
=======

const ItemController = require('../controllers/item-controller');
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba

const router = express.Router();

router.get('/items', ItemController.getItems);
<<<<<<< HEAD
router.get('/item/:isbn', ItemController.getItemByIsbn);
router.post('/item', ItemController.createItem);
router.put('/item/:isbn', ItemController.updateItem);
router.delete('/item/:isbn', ItemController.deleteItem);
=======
router.get('/item/:id', ItemController.getItemById);
router.post('/item', ItemController.createItem);
router.put('/item/:id', ItemController.updateItem);
router.delete('/item/:id', ItemController.deleteItem);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba

module.exports = router;
