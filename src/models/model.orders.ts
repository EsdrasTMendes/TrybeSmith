import IOrder from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute(
    `SELECT o.id, o.userID, p.id FROM Trybesmith.Orders AS o
    INNER JOIN Trybesmith.Products as p ON p.orderId = o.id`,
  );
  return rows as IOrder[];
};

export default {
  getAllOrders,
};