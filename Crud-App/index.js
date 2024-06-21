import express from 'express';
import mongoose from 'mongoose';
import Product from './models/Product.js';
import productRoute from './routes/productroute.js';
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.connect('mongodb+srv://harwanividhi05:vidhi@cluster0.i42jdkj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})

app.use('/api/products',productRoute);
app.get('/', (req, res) => {
    res.send('Hello from sid jhfhh node api');
});

