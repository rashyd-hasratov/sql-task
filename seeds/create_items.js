const { getItemsData } = require('../helpers/getItemsData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('items').del();

  const itemsData = getItemsData(2);

  await knex('items').insert(itemsData);
};
