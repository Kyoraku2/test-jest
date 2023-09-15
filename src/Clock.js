class Clock{
    _date = null;

    constructor(){
        this.reset();
    }

    reset(){
        // TODO : check if we need timezone
        if(this._date === null){
            this._date = new Date();
        }else{
            this._date.setTime(this.getCurrentTime());
        }
    }

    getDifference(){
        return this.getCurrentTime() - this.getTimestamp();
    }

    getTimestamp(){
        return this._date.getTime();
    }

    getCurrentTime(){
        return Date.now();
    }
}

module.exports = { Clock };