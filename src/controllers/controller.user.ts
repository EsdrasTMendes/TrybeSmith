import { Request, Response } from 'express';
import serviceUser from '../services/service.user';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await serviceUser.getUsers();
  return res.status(200).json(users);
};

export default { getAllUsers };