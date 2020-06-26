exports.test = (req, res) => {
    res.send('Olá! Teste ao Controller');
};

exports.getComment = (req, res) => {
        
};

exports.add = (req, res) => {
    res.send({type: 'POST'});
};

exports.update = (req, res) => {
    res.send({type: 'PUT'});
};

exports.delete = (req, res) => {
    res.send({type: 'DELETE'});
};