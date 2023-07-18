import { Customer } from "../customer/customer";
import { VehicleProcotol } from "./vehicle-protocol";

export class IndividualCar implements VehicleProcotol {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}

  pickUp(): void {
    console.log(`{this.name} está buscando ${this.customer.name}`);
  }
}
