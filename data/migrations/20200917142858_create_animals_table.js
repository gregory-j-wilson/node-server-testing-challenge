
exports.up = function(knex) {

    return knex.schema

    .createTable('animals', tbl => {
        tbl.increments()
        tbl.string('animal_name', 255).notNullable()
    })

};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('animals')

};
