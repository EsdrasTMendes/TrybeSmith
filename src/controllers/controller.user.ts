import { Request, Response, Router } from 'express';
import serviceUser from '../services/service.user';

const userController = Router();

userController.get('/', async (req: Request, res: Response): Promise<Response> => {
  const users = await serviceUser.getUsers();
  return res.status(200).json(users);
});

export default userController;