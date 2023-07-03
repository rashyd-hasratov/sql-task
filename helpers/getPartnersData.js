const { faker } = require('@faker-js/faker');

const getPartnersData = (quantity) => {
  const partnersData = [];

  for (let i = 0; i < quantity; i++) {
    const partnerData = {
      name: faker.person.fullName(),
    };

    partnersData.push(partnerData);
  }

  return partnersData;
};

module.exports.getPartnersData = getPartnersData;