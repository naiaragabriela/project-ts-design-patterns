import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { Drink } from './drink';

import { Food } from './food';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15;
  }

  calculateTaxesForDrink(drink: Drink): number {
    return drink.getPrice() + drink.getPrice() * 1;
  }
}
