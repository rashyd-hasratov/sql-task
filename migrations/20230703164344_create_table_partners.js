/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('partners');

  if (!tableExists) {
    await knex.schema.createTable('partners', function (table) {
      table.increments('id').primary();
      table.string('name');
    });
  }

  knex.destroy();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('partners');

  knex.destroy();
};
