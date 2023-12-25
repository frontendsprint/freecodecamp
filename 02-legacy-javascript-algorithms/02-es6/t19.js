//Use getters and setters to Control Access to an Object

class Thermostat {
    constructor(fahrenheit){
        this._fahrenheit = fahrenheit;
    }
    //getter
    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }
    //setter
    set temperature(celsius){
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }

}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;