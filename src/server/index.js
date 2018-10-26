const knex = require('./knex');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('dist'));
app.get('/api/restaurants', (req, res) => {
    knex('info').select()
        .then(data => res.json(data))
        .catch(err => console.log(err));
});

app.post('/api/restaurants', (req, res) => {
    knex('info')
        .insert(req.body)
        .then(cnt => res.send(cnt))
        .catch(err => console.log(err));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
