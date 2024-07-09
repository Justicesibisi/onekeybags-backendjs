// app.js  
const express = require('express');  
const app = express();  
const mongoose = require('mongoose');  
const routes = require('./routes');  
const config = require('config');  
  
mongoose.connect(config.get('MONGODB_URI'), { useNewUrlParser: true, useUnifiedTopology: true });  
  
app.use(express.json());  
app.use('/api', routes);  
  
const port = config.get('PORT') || 3000;  
app.listen(port, () => {  
  console.log(`Server started on port ${port}`);  
});  
