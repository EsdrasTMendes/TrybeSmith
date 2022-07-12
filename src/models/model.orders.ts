import IOrders from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrders[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM Trybesmith.Orders',
  );
  return rows as IOrders[];
};

export default {
  getAllOrders,
};