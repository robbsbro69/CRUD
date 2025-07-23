import express from 'express';  
import dotenv from "dotenv";
import { connectDB } from './configs/db.js';
import Product from './models/product.model.js';

dotenv.config();

const  app = express();

app.post('/products', async (req,res) => {
    const product = req.body; 

    if(!product.name || product.price || product.image){
        return res.status(400).json({success: false, message: "Please provide all details."});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error(`Error in Creating product ${error.message}`);
        res.status(500).json({success: false, message: "Server error"});
    }
});

app.get('/', (req,res) => {
    res.send("Server is ready");
})

app.listen(5000, () => {
    connectDB();
    console.log(`Server listen from port http://localhost:5000`);
})