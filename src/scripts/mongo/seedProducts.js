// DEBUG=app:* node src/scripts/mongo/seedProducts.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:products');
const MongoLib = require('../../lib/mongo');
const { productsMock } = require('../../utils/mocks/products');

async function seedProducts() {
  try {
    const mongoDB = new MongoLib();

    const promises = productsMock.map(async product => {
      await mongoDB.create('products', product);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} products have been created succesfully`)); // prettier-ignore
    return "success seed produtcs"
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

module.exports = seedProducts;