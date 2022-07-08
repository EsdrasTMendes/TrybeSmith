// import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const getAllUsers = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Users',
  );
  return rows as IUser[];
};

export default {
  getAllUsers,
};
