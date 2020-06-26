const express = require('express');
const router = express.Router();

const apiController = require('../controllers/comment');

router.get('/getlastcomment', apiController.getLastComment);

router.post('/appendcomment', apiController.appendComment);

module.exports = router;