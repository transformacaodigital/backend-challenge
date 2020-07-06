const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller.js');

router.get('/', UserController.getUsers);
router.post('/', UserController.saveUser);
router.post('/:id/post', UserController.savePost);
router.get('/:id', UserController.showUser);
router.put('/:id', UserController.editUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;

