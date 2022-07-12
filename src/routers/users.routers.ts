import { Router } from 'express';

import controllerUsers from '../controllers/controller.user';

const routers = Router();

routers.use('/users', controllerUsers.getAllUsers);

export default routers;