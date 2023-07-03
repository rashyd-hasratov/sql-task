const { faker } = require('@faker-js/faker');

const getItemsData = (quantity) => {
  const itemsData = [];

  for (let i = 0; i < quantity; i++) {
    const itemData = {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price({ dec: 0 })),
    };

    itemsData.push(itemData);
  }

  return itemsData;
};

module.exports.getItemsData = getItemsData;