import modelOrder from '../models/model.orders';
import modelProducts from '../models/model.products';
import IOrders from '../interfaces/orders.interface';

interface IOrdersResult {
  status: number,
  response: IOrders[],
}

const getAllOrders = async (): Promise<IOrdersResult> => {
  const orders = await modelOrder.getAllOrders();
  const products = await modelProducts.getAllProducts();
  const result = orders.map((order) => ({
    id: order.id,
    userId: order.userId,
    productsIds: products.filter((product) => order.id === product.orderId)
      .map((productId) => productId.id),
  }));
  return {
    status: 200,
    response: result,
  };
};

export default { getAllOrders };