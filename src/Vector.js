let { Coordinates } = require("./Coordinates");

class Vector{
    _c1 = null;
    _c2 = null;

    constructor(c1, c2){
        if(!c1 instanceof Coordinates){
            throw new Error('Parameter 1 is not a Coordinates');
        }
        if(!c2 instanceof Coordinates){
            throw new Error('Parameter 2 is not a Coordinates');
        }
        this._c1 = c1;
        this._c2 = c2;
    }

    getFirstCoordinates(){
        return this._c1;
    }

    getSecondCoordinates(){
        return this._c2;
    }

    getLength(){
        return Math.sqrt(
            Math.pow(this._c2.getX() - this._c1.getX(), 2) +
            Math.pow(this._c2.getY() - this._c1.getY(), 2)
        )
    }
}

module.exports = {Vector};