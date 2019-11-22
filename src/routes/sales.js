const express = require('express');
const passport = require('passport');
const SaleService = require('../services/sales');
const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');
const { userIdSchema } = require('../utils/schemas/users');

require('../utils/auth/strategies/jwt');

const saleRoutes = (app) => {
  const router = express.Router();
  app.use('/api/', router);

  const saleService = new SaleService();

  router.get('/sales',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:sales']),
  validationHandler({ userId: userIdSchema }, 'query'),
  async (req, res, next) => {
    const storeSales = await saleService.getSales(req.user._id)
    res.status(200).json(storeSales);
  });

  router.get('/sales/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params
    const storeSale = await saleService.getSaleById(id)
    res.status(200).json(storeSale);
  });

  router.post('/sales', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { body: sale, user } = req
    sale.user_id = user._id;
    const storeSale = await saleService.createSale(sale)
    res.status(200).json(storeSale);
  });

  router.put('/sales/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params
    const { body: sale } = req
    const storeSales = await saleService.updateSaleById({ id, ...sale })
    res.status(200).json(storeSales);
  });

  router.delete('/sales/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params
    const storeSales = await saleService.deleteSaleById(id)
    res.status(200).json(storeSales);
  });
}

module.exports = saleRoutes;