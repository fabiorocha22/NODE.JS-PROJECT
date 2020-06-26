const express = require('express');
const router = express.Router();
const cors  = require('cors')

const apiController = require('../controllers/comment');

router.get('/getcomment', cors(), apiController.getAllComment);

router.post('/appendcomment', cors(), apiController.appendComment);

module.exports = router;