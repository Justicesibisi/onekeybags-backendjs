const express = require('express');
const nodemon = require('nodemon');
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
// Use nodemon for automatic server restarts during development
if (process.env.NODE_ENV !== 'production') {
  nodemon({
    script: src/server.js,
    ext: 'js',
    ignore: ['node_modules/']
  });
  nodemon.on('start', () => {
    console.log('Server has started');
  });
  nodemon.on('restart', () => {
    console.log('Server has restarted');
  });
  nodemon.on('quit', () => {
    console.log('Server has stopped');
    process.exit();
  });
}