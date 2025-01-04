interface createOrderT {
  totalAmount: string;
  orderQty: number;
  orderName: string;
  orderStatus: string;
  createOrderId?: string;
  createOrderResponse?: string;
  captureOrderResponse?: string;
  userId: number;
}

interface updateOrderT {
  createOrderId: string;
  orderStatus?: string;
  captureOrderResponse?: string;
}
