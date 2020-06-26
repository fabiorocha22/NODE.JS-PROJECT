const express = require('express');
const router = express.Router();

const apiController = require('../controllers/controllerApp');

router.get('/getcomment', apiController.test);

router.post('/appendcomment', apiController.update);

module.exports = router;