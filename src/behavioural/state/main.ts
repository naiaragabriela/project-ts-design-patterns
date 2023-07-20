import { ShoppingOrder } from "./shopping-order/shopping-order";

///começo o pedido pendente
const order = new ShoppingOrder();
order.approvePayment(); //aprovado
order.waitPayment(); // pendente
order.shipOrder(); //vai para cliente
order.rejectPayment(); //daqui não altera mais o estado
order.approvePayment();
order.shipOrder();
