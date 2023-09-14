import { Vector } from "./Vector";

export class LandSensor{
    getNeededEnergy(vector){
        return vector.getLength() * ((Math.random() * (25 - 15) + 15) / 100);
    }
}