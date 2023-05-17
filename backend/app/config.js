const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'cars.ckunhqf8vzmj.us-east-2.rds.amazonaws.com',
        user: 'postgres',
        password: 'password',
        database: 'postgres',
        charset: 'utf8'
    }
});

module.exports.knex = knex;