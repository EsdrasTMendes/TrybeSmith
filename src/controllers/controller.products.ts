import { Request, Response } from 'express';
import serviceProducts from '../services/service.products';

const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
  const products = await serviceProducts.getAllProducts();

  return res.status(200).json(products);
};

const createProducts = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const newProduct = await serviceProducts.createProducts(name, amount);
  return res.status(newProduct.status).json(newProduct.response);
};

export default { getAllProducts, createProducts };