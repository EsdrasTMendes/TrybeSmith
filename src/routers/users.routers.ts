import { Router } from 'express';

import controllerUsers from '../controllers/controller.user';

const routers = Router();

routers.get('/users', controllerUsers.getAllUsers);
routers.post('/users', controllerUsers.createUser);

export default routers;