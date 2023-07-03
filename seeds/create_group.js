/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('group').del();
  await knex('group').insert([
    {name: 'temporary'},
    {name: 'regular'},
    {name: 'editors'},
    {name: 'admin'},
  ]);
};
