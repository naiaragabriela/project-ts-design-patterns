import { ProductProtocol } from "./product-protocol";

export class ProductCustomizationDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  getPrice(): number {
    return this.product.getPrice() + 30;
  }
  getName(): string {
    return this.product.getName() + "(Customizada)";
  }
}
