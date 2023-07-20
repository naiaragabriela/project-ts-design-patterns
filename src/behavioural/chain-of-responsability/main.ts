import { CEOBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-buget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-handler";

const customerBudget = new CustomerBudget(10);
const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
