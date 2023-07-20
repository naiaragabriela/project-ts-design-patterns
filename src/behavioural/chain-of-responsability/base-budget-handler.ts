import { CustomerBudget } from "./customer-budget";

export abstract class BaseBudgeHandler {
  protected nextHandler: BaseBudgeHandler | null = null;

  setNextHandler(handler: BaseBudgeHandler): BaseBudgeHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(budget: CustomerBudget): CustomerBudget {
    if (this.nextHandler) return this.nextHandler.handle(budget);
    return budget;
  }
}
