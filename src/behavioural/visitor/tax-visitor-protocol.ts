import { Food } from './food';
import { Drink } from './drink';

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForDrink(drink: Drink): number;
}
