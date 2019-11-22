const MongoConnect = require('../lib/mongo');

class SaleService {
  constructor() {
    this.mongodb = new MongoConnect()
    this.collection = 'sales'
  }

  async getSales(user_id) {
    try {
      const sales = await this.mongodb.getAll(this.collection, {user_id});
      return sales;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getSaleById(id) {
    try {
      const sale = await this.mongodb.get(this.collection, id);
      return sale;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateSaleById({ id, ...data }) {
    try {
      const sale = await this.mongodb.update(this.collection, id, data);
      return sale;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteSaleById(id) {
    try {
      const sale = await this.mongodb.delete(this.collection, id);
      return sale;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createSale(sale) {
    try {
      const id = await this.mongodb.create(this.collection, sale);
      return id;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = SaleService;
