const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('Hello!')

    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Jeff', age: 25
        },
        {
            name: 'ray', age: 24
        },
        {
            name: 'kim', age: 23
        }
    ])
})

app.listen(3000);

module.exports.app = app;