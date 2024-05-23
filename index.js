const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.models.js'); 
const productRoute = require('./routes/product.route.js'); // Corrected import

const app = express()
app.use(express.json())
app.listen(3000, () => console.log('Listening on port 3000'))



app.use('/products', productRoute)



app.get('/', (req, res) => res.send('Hello concac'))





mongoose.connect("mongodb+srv://admin:TNsb5tyrOvEJbKW5@backenddb.c619lfz.mongodb.net/NodeAPI?retryWrites=true&w=majority&appName=BackendDB")
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err))