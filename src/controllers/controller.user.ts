import { Request, Response } from 'express';
import serviceUser from '../services/service.user';

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {
  const users = await serviceUser.getUsers();
  return res.status(200).json(users);
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, classe, level, password } = req.body;
  const user = {
    username,
    classe,
    level,
    password,
  };
  const newUser = await serviceUser.createUser(user);
  return res.status(newUser.status).json(newUser.response);
};

export default { getAllUsers, createUser };