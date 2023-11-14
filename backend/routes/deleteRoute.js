const express = require('express');
const router = express.Router();
const deleteController = require('../controllers/deleteController');

router.post('/', deleteController.removeImage); // Changed the route to '/'

module.exports = router;
