/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary();
    table.string('login').unique();
    table.string('password');
    table.date('registration_date');
    table.date('last_visit_date');
    table.string('ip');
    table.boolean('activated');
    table.specificType('group_ids', 'integer[]');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
