export default class TemperatureSensorA {
    constructor(location, threshold) {
        this.location = location;
        this.threshold = threshold;
    }

    onDetect(callback) {
        const currentTemperature = this.threshold;
        const message = `TemperatureSensorA onDetect: Current temperature at ${this.location} is ${currentTemperature}°C`;
        callback(message);
    }
}