import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/products.interface';
import connection from './connection';

const getAllProducts = async (): Promise<IProducts[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return rows as IProducts[];
};

const createProducts = async (name: string, amount: string): Promise<ResultSetHeader> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return result;
};

export default { getAllProducts, createProducts };