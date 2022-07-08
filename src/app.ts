import express from 'express';
import productRouters from './routers/products.router';

const app = express();

app.use(express.json());
app.use(productRouters);

export default app;
