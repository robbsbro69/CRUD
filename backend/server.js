import express from 'express';  
import dotenv from "dotenv";
import { connectDB } from './configs/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen from port http://localhost:${PORT}`);
})