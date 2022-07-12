import modelUser from '../models/model.user';
import IUser from '../interfaces/user.interface';

interface ResponseCreateUsers {
  status: number,
  response: IUser
}

const getUsers = async (): Promise<IUser[]> => {
  const result = await modelUser.getAllUsers();
  return result;
};

const createUser = async (user: IUser): Promise<ResponseCreateUsers> => {
  const { insertId } = await modelUser.createUser(user);
  const newUser = {
    insertId,
    username: user.username,
    classe: user.classe,
    level: user.level,
    password: user.password,
  };
  return { status: 201, response: newUser }; // tenho que retornar o token
};

export default { getUsers, createUser };