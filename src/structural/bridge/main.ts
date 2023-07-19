import { Radio } from "./device/radio";
import { Tv } from "./device/tv";
import { RemoteControl } from "./remote-control/remote-control";
import { RemoteControlWithVolume } from "./remote-control/remote-control-with-volum";

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  //type guard
  if (!("volumeUp" in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new Tv();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControl2 = new RemoteControlWithVolume(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(radioRemoteControl);
clientCode(radioRemoteControl2);
clientCode(tvRemoteControl);
