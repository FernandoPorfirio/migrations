require('dotenv').config();

console.log(process.env.DB_CLIENT);

console.log({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    migrations: {
        directory: __dirname + '\\src\\migrations'
    },
    seeds: {
        directory: __dirname + '\\src\\seeds'
    }
});
module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    migrations: {
        directory: __dirname + '\\src\\migrations'
    },
    seeds: {
        directory: __dirname + '\\src\\seeds'
    }
};
