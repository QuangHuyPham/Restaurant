const path = require('path');
const knex = require('./knex');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/static', express.static('public'));
app.get('/list/restaurants', (req, res) => {
    knex('info').select()
        .then(data => res.json(data))
        .catch(err => console.log(err));
});

app.post('/list/restaurants', (req, res) => {
    knex('info')
        .insert(req.body)
        .then(cnt => res.send(cnt))
        .catch(err => console.log(err));
});

app.get('/list/restaurants/:id', (req, res) => {
    const i = req.params.id;
    knex('info')
        .where({ id: i })
        .join('foods', 'foods.codeRestaurant', 'info.codeRestaurant')
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

app.delete('/list/restaurants/:id', (req, res) => {
    const i = req.params.idFood;
    knex('info')
        .where('id', i)
        .del()
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
