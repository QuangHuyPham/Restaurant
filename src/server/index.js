const path = require('path');
const knex = require('./knex');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/static', express.static('public'));
app.get('/list/restaurants', (req, res) => {
    knex('info').select()
        .then(data => res.json(data))
        .catch(err => console.log(err));
});

app.post('/insert/restaurants', (req, res) => {
    knex('info')
        .insert({
            name: req.body.add_name,
            address: req.body.add_address,
            phone: req.body.add_phone,
            codeRestaurant: req.body.add_codeRestaurant
        })
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

app.delete('/delete/restaurants/:id', (req, res) => {
    const id = req.params.id;
    knex('foods')
        .where('idFood', id)
        .del()
        .then(res.location('http://localhost:8080/restaurants/4'))
        .then(data => res.send(data))
        .catch(err => console.log(err))
});

app.get('/list/restaurants/:id', (req, res) => {
    const id = req.params.id;
    knex('info')
        .where({ id })
        .then(info => {
            info = info[0];
            knex('foods')
                .where('codeRestaurant', info.codeRestaurant)
                .then(foods => res.send({
                    info,
                    foods
                }))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
