import { BrazilTaxVisitor } from './br-tax-visitor';
import { Drink } from './drink';
import { Food } from './food';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const drink = new Drink(5);

const cart = [food, drink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
console.log(total);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxesBrazil);

const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxesUS);
