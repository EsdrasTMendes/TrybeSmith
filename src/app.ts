import express from 'express';
import productRouters from './routers/products.router';
import orderRouters from './routers/orders.routers';
import userRouters from './routers/users.routers';

const app = express();

app.use(express.json());
app.use(productRouters);
app.use(orderRouters);
app.use(userRouters);

export default app;
