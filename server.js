const express = require('express');
const app = express();
const router = express.Router();

// Middleware
const middleware1 = (req, res, next) => {
  // Middleware logic
  next();
};

const middleware2 = (req, res, next) => {
  // Middleware logic
  next();
};

// Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

// Middleware usage
router.use(middleware1);
router.use(middleware2);

// Mount router
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
