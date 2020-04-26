const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// App Init
const app = express();
app.use(express.json());
app.use(cors());

//DB Init
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

//First Route
app.use('/api', require('./src/routes'));

app.listen(3001);