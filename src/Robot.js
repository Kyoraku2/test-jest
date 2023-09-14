let { Clock } = require("./Clock.js");
let { Coordinates } = require("./Coordinates.js");
let { LandSensor } = require("./LandSensor.js");
let { Vector } = require("./Vector.js");

const ENERGY_RECHARGING = .1;

class Robot{
    _clock = null;
    _energy = 1.0;
    _coordinates = null;
    _landSensor  = null;

    constructor(clock = null, _landSensor = null){
        this._clock = (clock instanceof Clock)? clock : new Clock();
        this._clock.reset();
        this._coordinates = new Coordinates(0,0);
        this._landSensor = (_landSensor instanceof LandSensor)? _landSensor : new LandSensor();
    }

    move(direction){
        let x = this.getCoordinates().getX();
        let y = this.getCoordinates().getY();

        for(let dir of direction.split(' ')){
            switch(dir){
                case 'right':
                    x++;
                    break;
                case 'left':
                    x--;
                    break;
                case 'up':
                    y++
                    break;
                case 'down':
                    y--
                    break;
            }
        }
        return this.moveTo(new Coordinates(x,y))
    }

    async moveTo(coordinates){
        let energy = this.getEnergy();
        let vector = new Vector(this.getCoordinates(), coordinates);
        let cost = this.getLandSensor().getNeededEnergy(vector);
        let nextEnergy = energy - energy * cost;

        if(0 >= nextEnergy){
            return false;
        }

        this._energy = nextEnergy;
        this.coordinates = coordinates;

        // TODO : make sleep
        await this.#sleep(this.getTimeToReach()*1000);

        return true;
    }

    #sleep(ms = 0) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getTimeToReach(vector){
        if(vector instanceof Vector){
            throw new Error('Parameter 1 is not a Vector');
        }
        return vector.getLength();
    }

    getClock(){
        return this._clock
    }

    getLandSensor(){
        return this._landSensor;
    }

    getEnergy(){
        // TODO
    }

    getCoordinates(){
        return this._coordinates;
    }
}

module.exports = { Robot, ENERGY_RECHARGING};