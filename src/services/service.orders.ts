import modelOrder from '../models/model.orders';
import IOrder from '../interfaces/orders.interface';

const getAllOrders = async (): Promise<IOrder[]> => {
  const result = await modelOrder.getAllOrders();
  return result;
};

export default { getAllOrders };