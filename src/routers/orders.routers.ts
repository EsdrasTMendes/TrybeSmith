import { Router } from 'express';

import controllerOrders from '../controllers/controller.order';

const routers = Router();

routers.use('/orders', controllerOrders.getAllOrders);

export default routers;