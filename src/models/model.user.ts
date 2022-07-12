import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const getAllUsers = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Users',
  );
  return rows as IUser[];
};

const createUser = async (user: IUser): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return result;
};
export default {
  getAllUsers,
  createUser,
};
