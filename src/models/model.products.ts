// import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/products.interface';
import connection from './connection';

const getAllProducts = async (): Promise<IProducts[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProducts[];
};

export default { getAllProducts };