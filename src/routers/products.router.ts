import { Router } from 'express';

import controllerProducts from '../controllers/controller.products';

const routers = Router();

routers.use('/products', controllerProducts.getAllProducts);

export default routers;