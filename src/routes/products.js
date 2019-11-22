const express = require('express');
const expressFileUpload = require('express-fileupload');
const path = require('path');
const passport = require('passport');
const ProductService = require('../services/products');
const { Storage } = require('@google-cloud/storage');

require('../utils/auth/strategies/jwt');

const productRoutes = (app) => {
  const router = express.Router();
  app.use('/api/', router);

  const productService = new ProductService();

  router.get('/', (req, res) => {
    res.send(`API v1`);
  });

  router.get('/products', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const storeProducts = await productService.getProducts()
    res.status(200).json(storeProducts);
  });

  router.get('/products/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params

    const storeProducts = await productService.getProductById(id)
    res.status(200).json(storeProducts);
  });

  router.post(
    '/products',
    expressFileUpload({
      useTempFiles: true,
      tempFileDir: path.join(__dirname, 'temp'),
    }),
    async (req, res, next) => {
      const { body: product } = req

      console.log(product);

      const storage = new Storage({
        projectId: '674993567691',
        keyFilename: 'keyfile.json'
      })
      
      const uploaded = await storage.bucket('koopapos-dev')
      .upload(req.files.image.tempFilePath, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        // By setting the option `destination`, you can change the name of the
        // object you are uploading to a bucket.
        metadata: {
          // Enable long-lived HTTP caching headers
          // Use only if the contents of the file will never change
          // (If the contents will change, use cacheControl: 'no-cache')
          cacheControl: 'public, max-age=31536000',
          contentType: req.files.image.mimetype,
        },
        public: true,
      });

      product.image = uploaded[0].metadata.mediaLink;
      const storeProducts = await productService.createProduct(product);
      res.status(200).json(storeProducts);
      
  });

  router.put('/products/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params
    const { body: product } = req
    const storeProducts = await productService.updateProductById({ id, ...product })
    res.status(200).json(storeProducts);
  });

  router.delete('/products/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const { id } = req.params
    const storeProducts = await productService.deleteProductById(id)
    res.status(200).json(storeProducts);
  });

  router.get('*', (req, res) => {
    res.status(404).send('Error 404');
  });
}

module.exports = productRoutes;