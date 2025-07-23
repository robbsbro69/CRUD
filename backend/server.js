import express from 'express';  
import dotenv from "dotenv";
import { connectDB } from './configs/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log(`Server listen from port http://localhost:5000`);
})