import { Request, Response } from 'express';
import serviceOrders from '../services/service.orders';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const orders = await serviceOrders.getAllOrders();
  return res.status(orders.status).json(orders.response);
};

export default { getAllOrders };