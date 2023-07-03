/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('items');

  if (!tableExists) {
    await knex.schema.createTable('items', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('price');
    });
  }

  knex.destroy();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('items');

  knex.destroy();
};
