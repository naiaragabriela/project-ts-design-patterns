import { ECommerceShoppingCart } from "./e-commerce-shoping-cart";

export class DiscountStrategy {
  protected discount = 0;
  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}
