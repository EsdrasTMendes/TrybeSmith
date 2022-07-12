import { Request, Response } from 'express';
import serviceOrders from '../services/service.orders';

const getAllOrders = async (req: Request, res: Response): Promise<Response> => {
  const products = await serviceOrders.getAllOrders();

  return res.status(200).json(products);
};

export default { getAllOrders };