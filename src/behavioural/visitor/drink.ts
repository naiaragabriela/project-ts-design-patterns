import { VisitableProduct } from './visitable-products';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Drink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcoholicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
