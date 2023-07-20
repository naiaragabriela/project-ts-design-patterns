import { BaseBudgeHandler } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class SellerBudgetHandler extends BaseBudgeHandler {
  BaseBudgeHandler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log("O vendedor tratou o orçamento");
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
