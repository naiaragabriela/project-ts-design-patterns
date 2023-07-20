import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();

const sellerOne = new Seller();
sellerOne.addProduct({ id: "1", name: "Camiseta", price: 49.9 });
sellerOne.addProduct({ id: "2", name: "Bermuda", price: 49.9 });

const sellerTwo = new Seller();
sellerTwo.addProduct({ id: "3", name: "Caneta", price: 9.9 });
sellerTwo.addProduct({ id: "4", name: "Lápis", price: 4.9 });

mediator.addSeller(sellerOne, sellerTwo);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("2");
buyer.buy("3");
buyer.viewProducts();
