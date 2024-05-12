const seedDependecy = require('../seeds/1-example.js');

exports.up = async function(knex) {

    await knex.schema.createTable('exaple', table => {
        // table.specificType('id', 'serial').primary();
        table.specificType('id', 'int2').primary();
        table.string('name', 70).notNullable();
        table.string('description', 255).nullable();
    });

    return await seedDependecy.seed(knex);

};

exports.down = async function(knex) {
    return knex.schema.dropTable('exaple');
};
