import { DefaultDiscount } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/e-commerce-shoping-cart";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({ name: "Produto 1", price: 50 });
shoppingCart.addProduct({ name: "Produto 2", price: 50 });
console.log(shoppingCart.getTotalWithDiscount());
console.log(shoppingCart.getTotal());
