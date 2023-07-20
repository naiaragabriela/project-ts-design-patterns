import { LightIntensityCommand } from "./light-intensity-command";
import { LightPowerCommand } from "./light-power-command";
import { SmartHouseLight } from "./smart-house.light";
import { SmartHouseApp } from "./smat-house-app";

//Receiver
const bedroomLight = new SmartHouseLight("Luz Quarto");
const bathroomLight = new SmartHouseLight("Luz Banheiro");

//Command
const bedroomlightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);

//Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand("btn-1", bedroomlightPowerCommand);
smartHouseApp.addCommand("btn-2", bathroomlightPowerCommand);
smartHouseApp.addCommand("btn-3", bedroomLightIntensityCommand);

smartHouseApp.executeCommand("btn-1");
smartHouseApp.undoCommand("btn-1");

smartHouseApp.executeCommand("btn-2");
smartHouseApp.undoCommand("btn-2");

for (let i = 0; i < 200; i++) {
  smartHouseApp.executeCommand("btn-3");
}

for (let i = 0; i < 200; i++) {
  smartHouseApp.undoCommand("btn-3");
}
