/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('group');

  if (!tableExists) {
    await knex.schema.createTable('group', function (table) {
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
  await knex.schema.dropTableIfExists('group');

  knex.destroy();
};
