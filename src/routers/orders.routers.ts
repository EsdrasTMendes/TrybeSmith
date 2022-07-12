import { Router } from 'express';

import controllerOrders from '../controllers/controller.order';

const routers = Router();

routers.use('/order', controllerOrders.getAllOrders);

export default routers;