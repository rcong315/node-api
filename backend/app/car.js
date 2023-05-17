const knex = require('./config').knex;
const bookshelf = require('bookshelf')(knex);

const Car = bookshelf.Model.extend({
    tableName: 'app_car'
});

module.exports = Car;