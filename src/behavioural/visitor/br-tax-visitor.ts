import { TaxVisitorProtocol } from './tax-visitor-protocol';
import { Drink } from './drink';
import { Food } from './food';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }

  calculateTaxesForDrink(drink: Drink): number {
    return drink.getPrice() + drink.getPrice() * 0.5;
  }
}
