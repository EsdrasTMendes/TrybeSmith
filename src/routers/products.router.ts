import { Router } from 'express';

import controllerProducts from '../controllers/controller.products';
import productsMiddleware from '../middlewares/products.middleware';

const routers = Router();

routers.get('/products', controllerProducts.getAllProducts);
routers.post('/products', productsMiddleware.middlewareProducts, controllerProducts.createProducts);

export default routers;