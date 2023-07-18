import { IndividualCar } from "../vehicle/individual-car";
import { Customer } from "../customer/customer";
import { VehicleProcotol } from "../vehicle/vehicle-protocol";
import { IndividualCustomer } from "../customer/individual-customer";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProcotol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
