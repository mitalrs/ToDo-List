const express  = require('express');
const app = express();
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

require("dotenv").config();

//middlewares
app.use(express.json());
app.use(express.static('content'));
app.use(express.urlencoded({ extends: false }));


const PORT = process.env.PORT;

app.use('/api/v1/user', userRoutes)
app.use('api/v1/product', productRoutes)

app.listen(PORT, ()=>{
    console.log('server is running')
    connectDB();
})