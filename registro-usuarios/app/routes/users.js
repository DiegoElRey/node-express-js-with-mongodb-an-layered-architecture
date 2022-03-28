const express = require('express')
const router = express.Router()
const {getItems, getItem, createItem, updateItem, deleteItem} = require('../controllers/users')
router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router