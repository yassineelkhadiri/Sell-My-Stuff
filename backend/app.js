//mongodb connection link = mongodb+srv://Yassine:<password>@cluster0.jv222.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb password = 7Z2tpUmpUB5ctD2v


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')


const app = express();

mongoose.connect('mongodb+srv://Yassine:7Z2tpUmpUB5ctD2v@cluster0.jv222.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
    console.log('unable to connect'); 
    console.error(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/stuff',stuffRoutes);
app.use('/api/auth',userRoutes);

module.exports = app;