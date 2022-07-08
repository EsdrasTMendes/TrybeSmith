import modelUser from '../models/model.user';
import IUser from '../interfaces/user.interface';

const getUsers = async (): Promise<IUser[]> => {
  const result = await modelUser.getAllUsers();
  return result;
};

export default { getUsers };