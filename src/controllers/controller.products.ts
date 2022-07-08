import { Request, Response } from 'express';
import serviceProducts from '../services/service.products';

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const products = await serviceProducts.getAllProducts();

  return res.status(200).json(products);
};

export default { getAllProducts };