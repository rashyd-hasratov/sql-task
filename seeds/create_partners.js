const { getPartnersData } = require('../helpers/getPartnersData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('partners').del();

  const partnersData = getPartnersData(10);

  await knex('partners').insert(partnersData);
};
