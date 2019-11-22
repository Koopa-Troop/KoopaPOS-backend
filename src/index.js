const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

const { config } = require('./config');
const authApi = require('./routes/auth');
const productRoutes = require('./routes/products');
const saleRoutes = require('./routes/sales');

app.use(express.json());

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

authApi(app);
saleRoutes(app);
productRoutes(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});