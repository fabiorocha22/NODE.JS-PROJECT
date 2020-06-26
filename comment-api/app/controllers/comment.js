const { comment } = require('../models');

exports.test = (req, res) => {
    res.send('Olá! Teste ao Controller');
};

exports.getAllComment = async (req, res) => {
    const lastComment = await comment.findAll({
        order: [['createdAt', 'DESC']]
    })
    res.json(lastComment)
};

exports.appendComment = async (req, res) => {
    const new_comment = await comment.create(req.body);
    res.json(new_comment);
}

exports.add = (req, res) => {
    res.send({type: 'POST'});
};

exports.update = (req, res) => {
    res.send({type: 'PUT'});
};

exports.delete = (req, res) => {
    res.send({type: 'DELETE'});
};