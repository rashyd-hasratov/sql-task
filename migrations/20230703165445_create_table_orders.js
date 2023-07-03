/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const tableExists = await knex.schema.hasTable('orders');

  if (!tableExists) {
    await knex.schema.createTable('orders', function (table) {
      table.integer('user_id');
      table.integer('partner_id');
      table.integer('item_id');
    });
  }

  knex.destroy();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('orders');

  knex.destroy();
};
