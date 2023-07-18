import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";
import { randomNumbers } from "./utils/random-numbers";
/*
const carFactory = new CarFactory();
const fusca = carFactory.getVehicle("Fusca");
fusca.pickUp("Joana");
fusca.stop();
*/
const carFactory = new CarFactory();
const customerNames = ["Ana", "Joana", "Helena", "João"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo Carro - ${randomNumbers(100)}`);
  newCar.stop();
  console.log("---");
}
