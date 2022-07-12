import modelProducts from '../models/model.products';
import IProducts from '../interfaces/products.interface';

interface ResponseCreateProducts {
  status: number,
  response: IProducts
}

const getAllProducts = async (): Promise<IProducts[]> => {
  const result = await modelProducts.getAllProducts();
  return result;
};

const createProducts = async (name: string, amount: string): Promise<ResponseCreateProducts> => {
  const { insertId } = await modelProducts.createProducts(name, amount);
  const product = {
    id: insertId,
    name,
    amount,
  };
  return { status: 201, response: product };
};

export default { getAllProducts, createProducts };