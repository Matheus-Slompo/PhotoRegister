exports.up = (knex) =>
  knex.schema.createTable('photos', (table) => {
    table.increments('id');
    table.text('url');
    table.text('title');
    table.integer('created_at').default(knex.fn.now());
    table.integer('updated_at').default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable('photos');
