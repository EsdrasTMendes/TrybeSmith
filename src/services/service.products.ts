import modelProducts from '../models/model.products';
import IProducts from '../interfaces/products.interface';

const getAllProducts = async (): Promise<IProducts[]> => {
  const result = await modelProducts.getAllProducts();
  return result;
};

export default { getAllProducts };