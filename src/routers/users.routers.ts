import { Router } from 'express';

import controllerUsers from '../controllers/controller.user';
import userMiddlewares from '../middlewares/user.middlewares';

const routers = Router();

routers.get('/users', controllerUsers.getAllUsers);
routers.post('/users', userMiddlewares.middlewareUsers, controllerUsers.createUser);

export default routers;