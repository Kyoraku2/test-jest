class Coordinates{
    _x = 0.0;
    _y = 0.0;

    constructor(x, y){
        this._x = x;
        this._y = y;
    }

    getX(){
        return this._x;
    }

    getY(){
        return this._y;
    }
}

module.exports = {Coordinates};