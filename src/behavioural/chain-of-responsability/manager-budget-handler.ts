import { BaseBudgeHandler } from "./base-budget-handler";
import { CustomerBudget } from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgeHandler {
  BaseBudgeHandler(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 5000) {
      console.log("O gerente tratou o orçamento");
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
