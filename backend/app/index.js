const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http')
const bodyParser = require('body-parser');
const queries = require('./queries');

const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {
    res.setHeader('Accept', 'application/json');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/default/:id', queries.getCar);

app.get('/default/', queries.getAllCars);

app.post('/default/', queries.newCar);

app.put('/default/:id', queries.updateCar);

app.delete('/default/:id', queries.deleteCar);

app.listen(3000);

module.exports.handler = serverless(app);
